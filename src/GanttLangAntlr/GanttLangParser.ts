// Generated from GanttLang.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import GanttLangListener from "./GanttLangListener.js";
import GanttLangVisitor from "./GanttLangVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class GanttLangParser extends Parser {
	public static readonly TASK_KW = 1;
	public static readonly COSTS_KW = 2;
	public static readonly SPANS_KW = 3;
	public static readonly DEPENDS_ON_KW = 4;
	public static readonly PARTICIPANT_KW = 5;
	public static readonly DASH_KW = 6;
	public static readonly COLON_KW = 7;
	public static readonly INT = 8;
	public static readonly STRING = 9;
	public static readonly WHITE_SPACE = 10;
	public static readonly COMMENT_LINE = 11;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_parse = 0;
	public static readonly RULE_taskEntry = 1;
	public static readonly RULE_taskName = 2;
	public static readonly RULE_dependencyClause = 3;
	public static readonly RULE_costClause = 4;
	public static readonly RULE_spanClause = 5;
	public static readonly RULE_participantEntry = 6;
	public static readonly RULE_participantName = 7;
	public static readonly literalNames: (string | null)[] = [ null, "'task'", 
                                                            "'costs'", "'spans'", 
                                                            "'depends on'", 
                                                            "'participant'", 
                                                            "'-'", "':'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "TASK_KW", 
                                                             "COSTS_KW", 
                                                             "SPANS_KW", 
                                                             "DEPENDS_ON_KW", 
                                                             "PARTICIPANT_KW", 
                                                             "DASH_KW", 
                                                             "COLON_KW", 
                                                             "INT", "STRING", 
                                                             "WHITE_SPACE", 
                                                             "COMMENT_LINE" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"parse", "taskEntry", "taskName", "dependencyClause", "costClause", "spanClause", 
		"participantEntry", "participantName",
	];
	public get grammarFileName(): string { return "GanttLang.g4"; }
	public get literalNames(): (string | null)[] { return GanttLangParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return GanttLangParser.symbolicNames; }
	public get ruleNames(): string[] { return GanttLangParser.ruleNames; }
	public get serializedATN(): number[] { return GanttLangParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, GanttLangParser._ATN, GanttLangParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public parse(): ParseContext {
		let localctx: ParseContext = new ParseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, GanttLangParser.RULE_parse);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 17;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 16;
				this.taskEntry();
				}
				}
				this.state = 19;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===1);
			this.state = 22;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 21;
				this.participantEntry();
				}
				}
				this.state = 24;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public taskEntry(): TaskEntryContext {
		let localctx: TaskEntryContext = new TaskEntryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, GanttLangParser.RULE_taskEntry);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 26;
			this.match(GanttLangParser.TASK_KW);
			this.state = 27;
			this.taskName();
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 28;
				this.dependencyClause();
				}
			}

			this.state = 33;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				{
				this.state = 31;
				this.costClause();
				}
				break;
			case 3:
				{
				this.state = 32;
				this.spanClause();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public taskName(): TaskNameContext {
		let localctx: TaskNameContext = new TaskNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, GanttLangParser.RULE_taskName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 35;
			this.match(GanttLangParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dependencyClause(): DependencyClauseContext {
		let localctx: DependencyClauseContext = new DependencyClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, GanttLangParser.RULE_dependencyClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 37;
			this.match(GanttLangParser.DEPENDS_ON_KW);
			this.state = 38;
			this.taskName();
			this.state = 42;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===9) {
				{
				{
				this.state = 39;
				this.taskName();
				}
				}
				this.state = 44;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public costClause(): CostClauseContext {
		let localctx: CostClauseContext = new CostClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, GanttLangParser.RULE_costClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 45;
			this.match(GanttLangParser.COSTS_KW);
			this.state = 46;
			this.match(GanttLangParser.INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public spanClause(): SpanClauseContext {
		let localctx: SpanClauseContext = new SpanClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, GanttLangParser.RULE_spanClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 48;
			this.match(GanttLangParser.SPANS_KW);
			this.state = 49;
			this.match(GanttLangParser.INT);
			this.state = 50;
			this.match(GanttLangParser.DASH_KW);
			this.state = 51;
			this.match(GanttLangParser.INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public participantEntry(): ParticipantEntryContext {
		let localctx: ParticipantEntryContext = new ParticipantEntryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, GanttLangParser.RULE_participantEntry);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 53;
			this.match(GanttLangParser.PARTICIPANT_KW);
			this.state = 54;
			this.participantName();
			this.state = 55;
			this.match(GanttLangParser.COLON_KW);
			this.state = 56;
			this.taskName();
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===9) {
				{
				{
				this.state = 57;
				this.taskName();
				}
				}
				this.state = 62;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public participantName(): ParticipantNameContext {
		let localctx: ParticipantNameContext = new ParticipantNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, GanttLangParser.RULE_participantName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 63;
			this.match(GanttLangParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,11,66,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,
	0,12,0,19,1,0,4,0,23,8,0,11,0,12,0,24,1,1,1,1,1,1,3,1,30,8,1,1,1,1,1,3,
	1,34,8,1,1,2,1,2,1,3,1,3,1,3,5,3,41,8,3,10,3,12,3,44,9,3,1,4,1,4,1,4,1,
	5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,5,6,59,8,6,10,6,12,6,62,9,6,1,7,1,
	7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,0,63,0,17,1,0,0,0,2,26,1,0,0,0,4,35,1,
	0,0,0,6,37,1,0,0,0,8,45,1,0,0,0,10,48,1,0,0,0,12,53,1,0,0,0,14,63,1,0,0,
	0,16,18,3,2,1,0,17,16,1,0,0,0,18,19,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,
	20,22,1,0,0,0,21,23,3,12,6,0,22,21,1,0,0,0,23,24,1,0,0,0,24,22,1,0,0,0,
	24,25,1,0,0,0,25,1,1,0,0,0,26,27,5,1,0,0,27,29,3,4,2,0,28,30,3,6,3,0,29,
	28,1,0,0,0,29,30,1,0,0,0,30,33,1,0,0,0,31,34,3,8,4,0,32,34,3,10,5,0,33,
	31,1,0,0,0,33,32,1,0,0,0,34,3,1,0,0,0,35,36,5,9,0,0,36,5,1,0,0,0,37,38,
	5,4,0,0,38,42,3,4,2,0,39,41,3,4,2,0,40,39,1,0,0,0,41,44,1,0,0,0,42,40,1,
	0,0,0,42,43,1,0,0,0,43,7,1,0,0,0,44,42,1,0,0,0,45,46,5,2,0,0,46,47,5,8,
	0,0,47,9,1,0,0,0,48,49,5,3,0,0,49,50,5,8,0,0,50,51,5,6,0,0,51,52,5,8,0,
	0,52,11,1,0,0,0,53,54,5,5,0,0,54,55,3,14,7,0,55,56,5,7,0,0,56,60,3,4,2,
	0,57,59,3,4,2,0,58,57,1,0,0,0,59,62,1,0,0,0,60,58,1,0,0,0,60,61,1,0,0,0,
	61,13,1,0,0,0,62,60,1,0,0,0,63,64,5,9,0,0,64,15,1,0,0,0,6,19,24,29,33,42,
	60];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GanttLangParser.__ATN) {
			GanttLangParser.__ATN = new ATNDeserializer().deserialize(GanttLangParser._serializedATN);
		}

		return GanttLangParser.__ATN;
	}


	static DecisionsToDFA = GanttLangParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ParseContext extends ParserRuleContext {
	constructor(parser?: GanttLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public taskEntry_list(): TaskEntryContext[] {
		return this.getTypedRuleContexts(TaskEntryContext) as TaskEntryContext[];
	}
	public taskEntry(i: number): TaskEntryContext {
		return this.getTypedRuleContext(TaskEntryContext, i) as TaskEntryContext;
	}
	public participantEntry_list(): ParticipantEntryContext[] {
		return this.getTypedRuleContexts(ParticipantEntryContext) as ParticipantEntryContext[];
	}
	public participantEntry(i: number): ParticipantEntryContext {
		return this.getTypedRuleContext(ParticipantEntryContext, i) as ParticipantEntryContext;
	}
    public get ruleIndex(): number {
    	return GanttLangParser.RULE_parse;
	}
	public enterRule(listener: GanttLangListener): void {
	    if(listener.enterParse) {
	 		listener.enterParse(this);
		}
	}
	public exitRule(listener: GanttLangListener): void {
	    if(listener.exitParse) {
	 		listener.exitParse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GanttLangVisitor<Result>): Result {
		if (visitor.visitParse) {
			return visitor.visitParse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TaskEntryContext extends ParserRuleContext {
	constructor(parser?: GanttLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TASK_KW(): TerminalNode {
		return this.getToken(GanttLangParser.TASK_KW, 0);
	}
	public taskName(): TaskNameContext {
		return this.getTypedRuleContext(TaskNameContext, 0) as TaskNameContext;
	}
	public costClause(): CostClauseContext {
		return this.getTypedRuleContext(CostClauseContext, 0) as CostClauseContext;
	}
	public spanClause(): SpanClauseContext {
		return this.getTypedRuleContext(SpanClauseContext, 0) as SpanClauseContext;
	}
	public dependencyClause(): DependencyClauseContext {
		return this.getTypedRuleContext(DependencyClauseContext, 0) as DependencyClauseContext;
	}
    public get ruleIndex(): number {
    	return GanttLangParser.RULE_taskEntry;
	}
	public enterRule(listener: GanttLangListener): void {
	    if(listener.enterTaskEntry) {
	 		listener.enterTaskEntry(this);
		}
	}
	public exitRule(listener: GanttLangListener): void {
	    if(listener.exitTaskEntry) {
	 		listener.exitTaskEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GanttLangVisitor<Result>): Result {
		if (visitor.visitTaskEntry) {
			return visitor.visitTaskEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TaskNameContext extends ParserRuleContext {
	constructor(parser?: GanttLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(GanttLangParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return GanttLangParser.RULE_taskName;
	}
	public enterRule(listener: GanttLangListener): void {
	    if(listener.enterTaskName) {
	 		listener.enterTaskName(this);
		}
	}
	public exitRule(listener: GanttLangListener): void {
	    if(listener.exitTaskName) {
	 		listener.exitTaskName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GanttLangVisitor<Result>): Result {
		if (visitor.visitTaskName) {
			return visitor.visitTaskName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DependencyClauseContext extends ParserRuleContext {
	constructor(parser?: GanttLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEPENDS_ON_KW(): TerminalNode {
		return this.getToken(GanttLangParser.DEPENDS_ON_KW, 0);
	}
	public taskName_list(): TaskNameContext[] {
		return this.getTypedRuleContexts(TaskNameContext) as TaskNameContext[];
	}
	public taskName(i: number): TaskNameContext {
		return this.getTypedRuleContext(TaskNameContext, i) as TaskNameContext;
	}
    public get ruleIndex(): number {
    	return GanttLangParser.RULE_dependencyClause;
	}
	public enterRule(listener: GanttLangListener): void {
	    if(listener.enterDependencyClause) {
	 		listener.enterDependencyClause(this);
		}
	}
	public exitRule(listener: GanttLangListener): void {
	    if(listener.exitDependencyClause) {
	 		listener.exitDependencyClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GanttLangVisitor<Result>): Result {
		if (visitor.visitDependencyClause) {
			return visitor.visitDependencyClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CostClauseContext extends ParserRuleContext {
	constructor(parser?: GanttLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COSTS_KW(): TerminalNode {
		return this.getToken(GanttLangParser.COSTS_KW, 0);
	}
	public INT(): TerminalNode {
		return this.getToken(GanttLangParser.INT, 0);
	}
    public get ruleIndex(): number {
    	return GanttLangParser.RULE_costClause;
	}
	public enterRule(listener: GanttLangListener): void {
	    if(listener.enterCostClause) {
	 		listener.enterCostClause(this);
		}
	}
	public exitRule(listener: GanttLangListener): void {
	    if(listener.exitCostClause) {
	 		listener.exitCostClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GanttLangVisitor<Result>): Result {
		if (visitor.visitCostClause) {
			return visitor.visitCostClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpanClauseContext extends ParserRuleContext {
	constructor(parser?: GanttLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SPANS_KW(): TerminalNode {
		return this.getToken(GanttLangParser.SPANS_KW, 0);
	}
	public INT_list(): TerminalNode[] {
	    	return this.getTokens(GanttLangParser.INT);
	}
	public INT(i: number): TerminalNode {
		return this.getToken(GanttLangParser.INT, i);
	}
	public DASH_KW(): TerminalNode {
		return this.getToken(GanttLangParser.DASH_KW, 0);
	}
    public get ruleIndex(): number {
    	return GanttLangParser.RULE_spanClause;
	}
	public enterRule(listener: GanttLangListener): void {
	    if(listener.enterSpanClause) {
	 		listener.enterSpanClause(this);
		}
	}
	public exitRule(listener: GanttLangListener): void {
	    if(listener.exitSpanClause) {
	 		listener.exitSpanClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GanttLangVisitor<Result>): Result {
		if (visitor.visitSpanClause) {
			return visitor.visitSpanClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParticipantEntryContext extends ParserRuleContext {
	constructor(parser?: GanttLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PARTICIPANT_KW(): TerminalNode {
		return this.getToken(GanttLangParser.PARTICIPANT_KW, 0);
	}
	public participantName(): ParticipantNameContext {
		return this.getTypedRuleContext(ParticipantNameContext, 0) as ParticipantNameContext;
	}
	public COLON_KW(): TerminalNode {
		return this.getToken(GanttLangParser.COLON_KW, 0);
	}
	public taskName_list(): TaskNameContext[] {
		return this.getTypedRuleContexts(TaskNameContext) as TaskNameContext[];
	}
	public taskName(i: number): TaskNameContext {
		return this.getTypedRuleContext(TaskNameContext, i) as TaskNameContext;
	}
    public get ruleIndex(): number {
    	return GanttLangParser.RULE_participantEntry;
	}
	public enterRule(listener: GanttLangListener): void {
	    if(listener.enterParticipantEntry) {
	 		listener.enterParticipantEntry(this);
		}
	}
	public exitRule(listener: GanttLangListener): void {
	    if(listener.exitParticipantEntry) {
	 		listener.exitParticipantEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GanttLangVisitor<Result>): Result {
		if (visitor.visitParticipantEntry) {
			return visitor.visitParticipantEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParticipantNameContext extends ParserRuleContext {
	constructor(parser?: GanttLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(GanttLangParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return GanttLangParser.RULE_participantName;
	}
	public enterRule(listener: GanttLangListener): void {
	    if(listener.enterParticipantName) {
	 		listener.enterParticipantName(this);
		}
	}
	public exitRule(listener: GanttLangListener): void {
	    if(listener.exitParticipantName) {
	 		listener.exitParticipantName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GanttLangVisitor<Result>): Result {
		if (visitor.visitParticipantName) {
			return visitor.visitParticipantName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
