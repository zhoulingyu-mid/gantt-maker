grammar GanttLang;

parse:
    (taskEntry)+
    (participantEntry)+
    ;

taskEntry: TASK_KW taskName (dependencyClause)? (costClause | spanClause);

taskName: STRING;

dependencyClause: DEPENDS_ON_KW taskName (taskName)*;

costClause: COSTS_KW INT;

spanClause: SPANS_KW INT DASH_KW INT;

participantEntry: PARTICIPANT_KW participantName COLON_KW taskName (taskName)*;

participantName: STRING;

// Lexer rules:
TASK_KW: 'task';
COSTS_KW: 'costs';
SPANS_KW: 'spans';
DEPENDS_ON_KW: 'depends on';
PARTICIPANT_KW: 'participant';
DASH_KW: '-';
COLON_KW: ':';

INT: [0-9]+;
STRING: '"' (~["\r\t])* '"';

// skips
WHITE_SPACE: [ \t\r\n]+ -> skip;
COMMENT_LINE: '#' ~[\r\n]* -> skip;
