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
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "SPACE", "COMMENT_LINE", 
		"INT", "STRING", "ESC",
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

	public static readonly _serializedATN: number[] = [4,0,11,103,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,
	1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,7,4,7,71,8,7,
	11,7,12,7,72,1,7,1,7,1,8,1,8,5,8,79,8,8,10,8,12,8,82,9,8,1,8,1,8,1,9,4,
	9,87,8,9,11,9,12,9,88,1,10,1,10,1,10,5,10,94,8,10,10,10,12,10,97,9,10,1,
	10,1,10,1,11,1,11,1,11,0,0,12,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,
	10,21,11,23,0,1,0,4,3,0,9,10,13,13,32,32,2,0,10,10,13,13,1,0,48,57,2,0,
	34,34,92,92,106,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,
	0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,
	21,1,0,0,0,1,25,1,0,0,0,3,30,1,0,0,0,5,41,1,0,0,0,7,47,1,0,0,0,9,53,1,0,
	0,0,11,55,1,0,0,0,13,67,1,0,0,0,15,70,1,0,0,0,17,76,1,0,0,0,19,86,1,0,0,
	0,21,90,1,0,0,0,23,100,1,0,0,0,25,26,5,116,0,0,26,27,5,97,0,0,27,28,5,115,
	0,0,28,29,5,107,0,0,29,2,1,0,0,0,30,31,5,100,0,0,31,32,5,101,0,0,32,33,
	5,112,0,0,33,34,5,101,0,0,34,35,5,110,0,0,35,36,5,100,0,0,36,37,5,115,0,
	0,37,38,5,32,0,0,38,39,5,111,0,0,39,40,5,110,0,0,40,4,1,0,0,0,41,42,5,99,
	0,0,42,43,5,111,0,0,43,44,5,115,0,0,44,45,5,116,0,0,45,46,5,115,0,0,46,
	6,1,0,0,0,47,48,5,115,0,0,48,49,5,112,0,0,49,50,5,97,0,0,50,51,5,110,0,
	0,51,52,5,115,0,0,52,8,1,0,0,0,53,54,5,45,0,0,54,10,1,0,0,0,55,56,5,112,
	0,0,56,57,5,97,0,0,57,58,5,114,0,0,58,59,5,116,0,0,59,60,5,105,0,0,60,61,
	5,99,0,0,61,62,5,105,0,0,62,63,5,112,0,0,63,64,5,97,0,0,64,65,5,110,0,0,
	65,66,5,116,0,0,66,12,1,0,0,0,67,68,5,58,0,0,68,14,1,0,0,0,69,71,7,0,0,
	0,70,69,1,0,0,0,71,72,1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,73,74,1,0,0,0,
	74,75,6,7,0,0,75,16,1,0,0,0,76,80,5,35,0,0,77,79,8,1,0,0,78,77,1,0,0,0,
	79,82,1,0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,81,83,1,0,0,0,82,80,1,0,0,0,83,
	84,6,8,0,0,84,18,1,0,0,0,85,87,7,2,0,0,86,85,1,0,0,0,87,88,1,0,0,0,88,86,
	1,0,0,0,88,89,1,0,0,0,89,20,1,0,0,0,90,95,5,34,0,0,91,94,3,23,11,0,92,94,
	8,3,0,0,93,91,1,0,0,0,93,92,1,0,0,0,94,97,1,0,0,0,95,93,1,0,0,0,95,96,1,
	0,0,0,96,98,1,0,0,0,97,95,1,0,0,0,98,99,5,34,0,0,99,22,1,0,0,0,100,101,
	5,92,0,0,101,102,7,3,0,0,102,24,1,0,0,0,6,0,72,80,88,93,95,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GanttLangLexer.__ATN) {
			GanttLangLexer.__ATN = new ATNDeserializer().deserialize(GanttLangLexer._serializedATN);
		}

		return GanttLangLexer.__ATN;
	}


	static DecisionsToDFA = GanttLangLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}