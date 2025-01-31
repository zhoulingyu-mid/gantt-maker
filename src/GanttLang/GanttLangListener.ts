// Generated from GanttLang.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


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
 * This interface defines a complete listener for a parse tree produced by
 * `GanttLangParser`.
 */
export default class GanttLangListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `GanttLangParser.parse`.
	 * @param ctx the parse tree
	 */
	enterParse?: (ctx: ParseContext) => void;
	/**
	 * Exit a parse tree produced by `GanttLangParser.parse`.
	 * @param ctx the parse tree
	 */
	exitParse?: (ctx: ParseContext) => void;
	/**
	 * Enter a parse tree produced by `GanttLangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `GanttLangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;
	/**
	 * Enter a parse tree produced by `GanttLangParser.taskEntry`.
	 * @param ctx the parse tree
	 */
	enterTaskEntry?: (ctx: TaskEntryContext) => void;
	/**
	 * Exit a parse tree produced by `GanttLangParser.taskEntry`.
	 * @param ctx the parse tree
	 */
	exitTaskEntry?: (ctx: TaskEntryContext) => void;
	/**
	 * Enter a parse tree produced by `GanttLangParser.taskName`.
	 * @param ctx the parse tree
	 */
	enterTaskName?: (ctx: TaskNameContext) => void;
	/**
	 * Exit a parse tree produced by `GanttLangParser.taskName`.
	 * @param ctx the parse tree
	 */
	exitTaskName?: (ctx: TaskNameContext) => void;
	/**
	 * Enter a parse tree produced by `GanttLangParser.dependencyClause`.
	 * @param ctx the parse tree
	 */
	enterDependencyClause?: (ctx: DependencyClauseContext) => void;
	/**
	 * Exit a parse tree produced by `GanttLangParser.dependencyClause`.
	 * @param ctx the parse tree
	 */
	exitDependencyClause?: (ctx: DependencyClauseContext) => void;
	/**
	 * Enter a parse tree produced by `GanttLangParser.costClause`.
	 * @param ctx the parse tree
	 */
	enterCostClause?: (ctx: CostClauseContext) => void;
	/**
	 * Exit a parse tree produced by `GanttLangParser.costClause`.
	 * @param ctx the parse tree
	 */
	exitCostClause?: (ctx: CostClauseContext) => void;
	/**
	 * Enter a parse tree produced by `GanttLangParser.spanClause`.
	 * @param ctx the parse tree
	 */
	enterSpanClause?: (ctx: SpanClauseContext) => void;
	/**
	 * Exit a parse tree produced by `GanttLangParser.spanClause`.
	 * @param ctx the parse tree
	 */
	exitSpanClause?: (ctx: SpanClauseContext) => void;
	/**
	 * Enter a parse tree produced by `GanttLangParser.participantEntry`.
	 * @param ctx the parse tree
	 */
	enterParticipantEntry?: (ctx: ParticipantEntryContext) => void;
	/**
	 * Exit a parse tree produced by `GanttLangParser.participantEntry`.
	 * @param ctx the parse tree
	 */
	exitParticipantEntry?: (ctx: ParticipantEntryContext) => void;
	/**
	 * Enter a parse tree produced by `GanttLangParser.participantName`.
	 * @param ctx the parse tree
	 */
	enterParticipantName?: (ctx: ParticipantNameContext) => void;
	/**
	 * Exit a parse tree produced by `GanttLangParser.participantName`.
	 * @param ctx the parse tree
	 */
	exitParticipantName?: (ctx: ParticipantNameContext) => void;
}

