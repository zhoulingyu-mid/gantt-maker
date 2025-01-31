// Generated from GanttLang.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { ParseContext } from "./GanttLangParser.js";
import { ExprContext } from "./GanttLangParser.js";
import { TaskEntryContext } from "./GanttLangParser.js";
import { TaskNameContext } from "./GanttLangParser.js";
import { DependencyClauseContext } from "./GanttLangParser.js";
import { CostClauseContext } from "./GanttLangParser.js";
import { SpanClauseContext } from "./GanttLangParser.js";
import { ParticipantEntryContext } from "./GanttLangParser.js";
import { ParticipantNameContext } from "./GanttLangParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `GanttLangParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class GanttLangVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `GanttLangParser.parse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParse?: (ctx: ParseContext) => Result;
	/**
	 * Visit a parse tree produced by `GanttLangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;
	/**
	 * Visit a parse tree produced by `GanttLangParser.taskEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTaskEntry?: (ctx: TaskEntryContext) => Result;
	/**
	 * Visit a parse tree produced by `GanttLangParser.taskName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTaskName?: (ctx: TaskNameContext) => Result;
	/**
	 * Visit a parse tree produced by `GanttLangParser.dependencyClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDependencyClause?: (ctx: DependencyClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `GanttLangParser.costClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCostClause?: (ctx: CostClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `GanttLangParser.spanClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpanClause?: (ctx: SpanClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `GanttLangParser.participantEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParticipantEntry?: (ctx: ParticipantEntryContext) => Result;
	/**
	 * Visit a parse tree produced by `GanttLangParser.participantName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParticipantName?: (ctx: ParticipantNameContext) => Result;
}

