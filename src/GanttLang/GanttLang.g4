grammar GanttLang;

parse:
    (taskEntry)+
    (participantEntry)+
    ;

expr: taskEntry | participantEntry;

taskEntry: 'task' taskName (dependencyClause)? (costClause | spanClause);

taskName: STRING;

dependencyClause: 'depends on' taskName (taskName)*;

costClause: 'costs' INT;

spanClause: 'spans' INT '-' INT;

participantEntry: 'participant' participantName ':' taskName (taskName)*;

participantName: STRING;

SPACE: [ \t\r\n]+ -> skip;
COMMENT_LINE: '#' ~[\r\n]* -> skip;

INT: [0-9]+;
STRING: '"' (ESC | ~["\\])* '"';
fragment ESC: '\\' ["\\];
