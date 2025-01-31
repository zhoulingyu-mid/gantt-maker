import  antlr4 from 'antlr4';
import { IntervalTree, Interval} from 'node-interval-tree';
import graphlib from '@dagrejs/graphlib';

import GanttLangLexer from './GanttLangLexer';
import GanttLangParser, { ParticipantEntryContext, TaskEntryContext } from './GanttLangParser';
import GanttLangVisitor from './GanttLangVisitor';


export class Task {
  #name: string;
  #dependencies: Array<string>;
  #cost: number | null;
  #start: number | null;
  #end: number | null;
  #participant: string | null;

  constructor(
    name: string,
    dependencies: Array<string> = [],
    cost: number | null = 0,
    start: number | null,
    end: number | null
  ) {
    this.#name = name;
    this.#dependencies = dependencies; // Array of taskNames that this task depends on
    this.#cost = cost;
    this.#start = start;
    this.#end = end;
    this.#participant = null; // Participant will be set later using set_participant
  }

  get name(){
    return this.#name;
  }

  get dependencies(){
    return this.#dependencies;
  }

  get cost(){
    return this.#cost;
  }

  get start(): number | null{
    return this.#start;
  }
  
  set start(start: number){
    this.#start = start;
  }

  get end(): number | null{
    return this.#end;
  }
  
  set end(end: number){
    this.#end = end;
  }

  get participant(): string | null{
    return this.#participant;
  }

  set participant(participantName: string) {
    if (this.#participant != null) {
      throw new Error(`Task taken by multiple participants: "${this.participant}", "${participantName}"`);
    }
    this.#participant = participantName;
  }

  clone(){
    const newTask = new Task(
      this.#name,
      this.#dependencies,
      this.#cost,
      this.#start,
      this.#end
    );

    newTask.#participant = this.#participant;
    return newTask;
  }
}

export class Participant {
  #name: string;
  #taskNames: Array<string>;

  constructor(name: string, taskNames: Array<string>){
    this.#name = name;
    this.#taskNames =  taskNames;
  }

  get name(){
    return this.#name;
  }

  get taskNames(){
    return this.#taskNames;
  }
}


/**
 * Given ganttLang as a string, extract Task and Participants out of it
 */
export function extractGanntObjects(ganttLang: string): {
  tasks: Map<string, Task>,
  participants: Map<string, Participant>
} {
  const tasks: Map<string, Task> = new Map();
  const participants: Map<string, Participant> = new Map();

  const chars = new antlr4.CharStream(ganttLang);
  const lexer = new GanttLangLexer(chars);
  const tokens  = new antlr4.CommonTokenStream(lexer);
  const parser = new GanttLangParser(tokens);

  const tree = parser.parse();
  if (parser.syntaxErrorsCount !== 0) {
    throw new Error('Parsing error');
  }
  const visitor = new GanttLangVisitor<void>();

  visitor.visitTaskEntry = (ctx: TaskEntryContext) => {
    const taskName = ctx.taskName().getText();
    const dependencies = ctx.dependencyClause() ? ctx.dependencyClause().taskName_list().map(i => i.getText()) : [];
    const cost = ctx.costClause() ? parseInt(ctx.costClause().INT().getText(), 10) : null;
    const [start, end] = ctx.spanClause() ? ctx.spanClause().INT_list().map(i=>parseInt(i.getText(), 10)) : [null, null];
    if (tasks.has(taskName)) {
      throw new Error(`Duplicated tasks: ${taskName}`);
    }
    
    tasks.set(
      taskName,
      new Task(taskName, dependencies, cost, start, end),
    );
  };

  visitor.visitParticipantEntry = (ctx: ParticipantEntryContext) => {
    const participantName = ctx.participantName().getText();
    const taskNames = ctx.taskName_list().map(i => i.getText());

    for (const taskName of taskNames) {
      const task = tasks.get(taskName);
      if (task == null) {
        throw new Error(`Unknown task ID: ${taskName}`);
      }
      if (task.participant != null) {
        throw new Error(`Task taken by multiple participants: "${task.participant}", "${participantName}"`);
      }
      task.participant = participantName;
    }

    participants.set(
      participantName,
      new Participant(participantName, taskNames),
    );
  };

  visitor.visit(tree);
  return {
    tasks,
    participants
  };
}

/**
 * Given Tasks and Participants figure out when tasks need to start and end (0-based close-close range)
 */
export function scheduleTasks(
  tasks: Map<string, Task>,
  participants: Map<string, Participant>
): Map<string, Task> {
  // Make a copy of input tasks 
  const outputTasks = new Map<string, Task>();
  for (const [taskName, task] of tasks.entries()){
    outputTasks.set(taskName, task.clone());
  }

  // Build a graph for tasks and get topological order
  const taskGraph = new graphlib.Graph();
  for (const task of outputTasks.values()){
    taskGraph.setNode(task.name, task.name);
  }
  for (const task of outputTasks.values()){
    for (const parentTaskName of task.dependencies){
      taskGraph.setEdge(parentTaskName, task.name);
    }
  }
  const orderedTaskNames = graphlib.alg.topsort(taskGraph);

  // Init interval trees
  const invervalTreeByParticipant: Map<string, IntervalTree<Interval<number>, number>> = new Map();
  for (const name of participants.keys()){
    invervalTreeByParticipant.set(name, new IntervalTree());
  }

  // Deal with task with specified range spans first
  // record them in interval trees
  for (const task of tasks.values()) {
    if (task.start == null || task.end == null) {
      continue;
    }
    if (task.participant == null) {
      throw new Error(`Task not assigned to a participant: ${task.name}`);
    }
    const participantName = task.participant;
    const intervalTree = invervalTreeByParticipant.get(participantName)!;
    const intervals = intervalTree.search(task.start, task.end);
    if (intervals.length !== 0) {
      throw new Error(`Task not assigned to a participant: ${task.name}`);
    }
    intervalTree.insert({low: task.start, high: task.end});
  }

  // Assign tasks without specific range spans to a specific day range
  // Given a task, consult its dependencies, to get the minumun task.start value
  for (const taskName of orderedTaskNames) {
    const task = outputTasks.get(taskName)!;
    if (task.start != null && task.end != null) {
      continue;
    }
    const minimumStart = Math.max(  
      0, ...task.dependencies.map(taskName=>outputTasks.get(taskName)!).map(task=>task.end!)
    ) + 1;
    const intervalTree = invervalTreeByParticipant.get(task.participant!)!;
    
    let searchStart = minimumStart;
    for (let i=0; i<50; i++) {
      const intervals = intervalTree.search(searchStart, searchStart+task.cost! - 1)
      if (intervals.length ===0) {
        task.start = searchStart;
        task.end = searchStart+task.cost! - 1;
        intervalTree.insert({low: task.start, high:task.end});
        break;
      }
      searchStart = Math.max(
        searchStart, ...intervals.map(i=>i.high)
      ) + 1;
    }
  }

  return outputTasks;
}
