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
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly SPACE = 8;
	public static readonly COMMENT_LINE = 9;
	public static readonly INT = 10;
	public static readonly STRING = 11;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_parse = 0;
	public static readonly RULE_expr = 1;
	public static readonly RULE_taskEntry = 2;
	public static readonly RULE_taskName = 3;
	public static readonly RULE_dependencyClause = 4;
	public static readonly RULE_costClause = 5;
	public static readonly RULE_spanClause = 6;
	public static readonly RULE_participantEntry = 7;
	public static readonly RULE_participantName = 8;
	public static readonly literalNames: (string | null)[] = [ null, "'task'", 
                                                            "'depends on'", 
                                                            "'costs'", "'spans'", 
                                                            "'-'", "'participant'", 
                                                            "':'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "SPACE", "COMMENT_LINE", 
                                                             "INT", "STRING" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"parse", "expr", "taskEntry", "taskName", "dependencyClause", "costClause", 
		"spanClause", "participantEntry", "participantName",
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
			this.state = 19;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 18;
				this.taskEntry();
				}
				}
				this.state = 21;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===1);
			this.state = 24;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 23;
				this.participantEntry();
				}
				}
				this.state = 26;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===6);
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
	public expr(): ExprContext {
		let localctx: ExprContext = new ExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, GanttLangParser.RULE_expr);
		try {
			this.state = 30;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 28;
				this.taskEntry();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 29;
				this.participantEntry();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
		this.enterRule(localctx, 4, GanttLangParser.RULE_taskEntry);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 32;
			this.match(GanttLangParser.T__0);
			this.state = 33;
			this.taskName();
			this.state = 35;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 34;
				this.dependencyClause();
				}
			}

			this.state = 39;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				{
				this.state = 37;
				this.costClause();
				}
				break;
			case 4:
				{
				this.state = 38;
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
		this.enterRule(localctx, 6, GanttLangParser.RULE_taskName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 41;
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
		this.enterRule(localctx, 8, GanttLangParser.RULE_dependencyClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 43;
			this.match(GanttLangParser.T__1);
			this.state = 44;
			this.taskName();
			this.state = 48;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===11) {
				{
				{
				this.state = 45;
				this.taskName();
				}
				}
				this.state = 50;
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
		this.enterRule(localctx, 10, GanttLangParser.RULE_costClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 51;
			this.match(GanttLangParser.T__2);
			this.state = 52;
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
		this.enterRule(localctx, 12, GanttLangParser.RULE_spanClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 54;
			this.match(GanttLangParser.T__3);
			this.state = 55;
			this.match(GanttLangParser.INT);
			this.state = 56;
			this.match(GanttLangParser.T__4);
			this.state = 57;
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
		this.enterRule(localctx, 14, GanttLangParser.RULE_participantEntry);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 59;
			this.match(GanttLangParser.T__5);
			this.state = 60;
			this.participantName();
			this.state = 61;
			this.match(GanttLangParser.T__6);
			this.state = 62;
			this.taskName();
			this.state = 66;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===11) {
				{
				{
				this.state = 63;
				this.taskName();
				}
				}
				this.state = 68;
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
		this.enterRule(localctx, 16, GanttLangParser.RULE_participantName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 69;
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

	public static readonly _serializedATN: number[] = [4,1,11,72,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,
	8,0,11,0,12,0,21,1,0,4,0,25,8,0,11,0,12,0,26,1,1,1,1,3,1,31,8,1,1,2,1,2,
	1,2,3,2,36,8,2,1,2,1,2,3,2,40,8,2,1,3,1,3,1,4,1,4,1,4,5,4,47,8,4,10,4,12,
	4,50,9,4,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,5,7,65,8,7,
	10,7,12,7,68,9,7,1,8,1,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,0,69,0,19,1,
	0,0,0,2,30,1,0,0,0,4,32,1,0,0,0,6,41,1,0,0,0,8,43,1,0,0,0,10,51,1,0,0,0,
	12,54,1,0,0,0,14,59,1,0,0,0,16,69,1,0,0,0,18,20,3,4,2,0,19,18,1,0,0,0,20,
	21,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,24,1,0,0,0,23,25,3,14,7,0,24,
	23,1,0,0,0,25,26,1,0,0,0,26,24,1,0,0,0,26,27,1,0,0,0,27,1,1,0,0,0,28,31,
	3,4,2,0,29,31,3,14,7,0,30,28,1,0,0,0,30,29,1,0,0,0,31,3,1,0,0,0,32,33,5,
	1,0,0,33,35,3,6,3,0,34,36,3,8,4,0,35,34,1,0,0,0,35,36,1,0,0,0,36,39,1,0,
	0,0,37,40,3,10,5,0,38,40,3,12,6,0,39,37,1,0,0,0,39,38,1,0,0,0,40,5,1,0,
	0,0,41,42,5,11,0,0,42,7,1,0,0,0,43,44,5,2,0,0,44,48,3,6,3,0,45,47,3,6,3,
	0,46,45,1,0,0,0,47,50,1,0,0,0,48,46,1,0,0,0,48,49,1,0,0,0,49,9,1,0,0,0,
	50,48,1,0,0,0,51,52,5,3,0,0,52,53,5,10,0,0,53,11,1,0,0,0,54,55,5,4,0,0,
	55,56,5,10,0,0,56,57,5,5,0,0,57,58,5,10,0,0,58,13,1,0,0,0,59,60,5,6,0,0,
	60,61,3,16,8,0,61,62,5,7,0,0,62,66,3,6,3,0,63,65,3,6,3,0,64,63,1,0,0,0,
	65,68,1,0,0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,15,1,0,0,0,68,66,1,0,0,0,69,
	70,5,11,0,0,70,17,1,0,0,0,7,21,26,30,35,39,48,66];

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


export class ExprContext extends ParserRuleContext {
	constructor(parser?: GanttLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public taskEntry(): TaskEntryContext {
		return this.getTypedRuleContext(TaskEntryContext, 0) as TaskEntryContext;
	}
	public participantEntry(): ParticipantEntryContext {
		return this.getTypedRuleContext(ParticipantEntryContext, 0) as ParticipantEntryContext;
	}
    public get ruleIndex(): number {
    	return GanttLangParser.RULE_expr;
	}
	public enterRule(listener: GanttLangListener): void {
	    if(listener.enterExpr) {
	 		listener.enterExpr(this);
		}
	}
	public exitRule(listener: GanttLangListener): void {
	    if(listener.exitExpr) {
	 		listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GanttLangVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
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
	public INT_list(): TerminalNode[] {
	    	return this.getTokens(GanttLangParser.INT);
	}
	public INT(i: number): TerminalNode {
		return this.getToken(GanttLangParser.INT, i);
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
	public participantName(): ParticipantNameContext {
		return this.getTypedRuleContext(ParticipantNameContext, 0) as ParticipantNameContext;
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
