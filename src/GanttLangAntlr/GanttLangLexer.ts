// Generated from GanttLang.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class GanttLangLexer extends Lexer {
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
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"TASK_KW", "COSTS_KW", "SPANS_KW", "DEPENDS_ON_KW", "PARTICIPANT_KW", 
		"DASH_KW", "COLON_KW", "INT", "STRING", "WHITE_SPACE", "COMMENT_LINE",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, GanttLangLexer._ATN, GanttLangLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "GanttLang.g4"; }

	public get literalNames(): (string | null)[] { return GanttLangLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return GanttLangLexer.symbolicNames; }
	public get ruleNames(): string[] { return GanttLangLexer.ruleNames; }

	public get serializedATN(): number[] { return GanttLangLexer._serializedATN; }

	public get channelNames(): string[] { return GanttLangLexer.channelNames; }

	public get modeNames(): string[] { return GanttLangLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,11,97,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,
	9,2,10,7,10,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,
	1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,
	1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,7,4,7,69,8,7,11,7,12,7,70,
	1,8,1,8,5,8,75,8,8,10,8,12,8,78,9,8,1,8,1,8,1,9,4,9,83,8,9,11,9,12,9,84,
	1,9,1,9,1,10,1,10,5,10,91,8,10,10,10,12,10,94,9,10,1,10,1,10,0,0,11,1,1,
	3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,1,0,4,1,0,48,57,3,0,9,9,
	13,13,34,34,3,0,9,10,13,13,32,32,2,0,10,10,13,13,100,0,1,1,0,0,0,0,3,1,
	0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,
	1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,1,23,1,0,0,0,3,28,1,0,0,
	0,5,34,1,0,0,0,7,40,1,0,0,0,9,51,1,0,0,0,11,63,1,0,0,0,13,65,1,0,0,0,15,
	68,1,0,0,0,17,72,1,0,0,0,19,82,1,0,0,0,21,88,1,0,0,0,23,24,5,116,0,0,24,
	25,5,97,0,0,25,26,5,115,0,0,26,27,5,107,0,0,27,2,1,0,0,0,28,29,5,99,0,0,
	29,30,5,111,0,0,30,31,5,115,0,0,31,32,5,116,0,0,32,33,5,115,0,0,33,4,1,
	0,0,0,34,35,5,115,0,0,35,36,5,112,0,0,36,37,5,97,0,0,37,38,5,110,0,0,38,
	39,5,115,0,0,39,6,1,0,0,0,40,41,5,100,0,0,41,42,5,101,0,0,42,43,5,112,0,
	0,43,44,5,101,0,0,44,45,5,110,0,0,45,46,5,100,0,0,46,47,5,115,0,0,47,48,
	5,32,0,0,48,49,5,111,0,0,49,50,5,110,0,0,50,8,1,0,0,0,51,52,5,112,0,0,52,
	53,5,97,0,0,53,54,5,114,0,0,54,55,5,116,0,0,55,56,5,105,0,0,56,57,5,99,
	0,0,57,58,5,105,0,0,58,59,5,112,0,0,59,60,5,97,0,0,60,61,5,110,0,0,61,62,
	5,116,0,0,62,10,1,0,0,0,63,64,5,45,0,0,64,12,1,0,0,0,65,66,5,58,0,0,66,
	14,1,0,0,0,67,69,7,0,0,0,68,67,1,0,0,0,69,70,1,0,0,0,70,68,1,0,0,0,70,71,
	1,0,0,0,71,16,1,0,0,0,72,76,5,34,0,0,73,75,8,1,0,0,74,73,1,0,0,0,75,78,
	1,0,0,0,76,74,1,0,0,0,76,77,1,0,0,0,77,79,1,0,0,0,78,76,1,0,0,0,79,80,5,
	34,0,0,80,18,1,0,0,0,81,83,7,2,0,0,82,81,1,0,0,0,83,84,1,0,0,0,84,82,1,
	0,0,0,84,85,1,0,0,0,85,86,1,0,0,0,86,87,6,9,0,0,87,20,1,0,0,0,88,92,5,35,
	0,0,89,91,8,3,0,0,90,89,1,0,0,0,91,94,1,0,0,0,92,90,1,0,0,0,92,93,1,0,0,
	0,93,95,1,0,0,0,94,92,1,0,0,0,95,96,6,10,0,0,96,22,1,0,0,0,5,0,70,76,84,
	92,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GanttLangLexer.__ATN) {
			GanttLangLexer.__ATN = new ATNDeserializer().deserialize(GanttLangLexer._serializedATN);
		}

		return GanttLangLexer.__ATN;
	}


	static DecisionsToDFA = GanttLangLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}