const wordType = {
    "EmptyWord" : 1,
    "SymbolWord" : 2,
    "QupteWord" : 3,
    "SharpWord" : 4,
    "NoSeparator" : 5
};

const emptyWords = [
    ' ', '\t', '\n'
]

const symbolWords = [
    '(', ')', '[', ']', '{', '}',
    '+', '-', '*', '/', '%', "**", '/',
    "==", "!=", '<', '>', "<=", ">=",
    '=', ":=",
    '&', '|', '^', '~', "<<", ">>",
    ',', ':', '.', ';', '@'
]

const quoteWords = [
    '\'', '"', "'''", "\"\"\""
]

const sharpWords = [
    '#'
]

function getSeparator(char, nextChar, nextnextChar, lineNumber){
    if (emptyWords.includes(char)){
        return [wordType["EmptyWord"], lineNumber];
    } else if (symbolWords.includes(char)) {
        if (
            (char == '*' && nextChar == '*') || 
            (char == '=' && nextChar == '=') ||
            (char == '!' && nextChar == '=') ||
            (char == '<' && (nextChar == '=' || nextChar == '<')) ||
            (char == '>' && (nextChar == '=' || nextChar == '>')) ||
            (char == ':' && nextChar == '=') ||
            (char == '<' && nextChar == '=')
        ){
            return [wordType["SymbolWord"], lineNumber++];
        } else {
            return [wordType["SymbolWord"], lineNumber];
        }
    } else if (quoteWords.includes(char)) {
        if (char == '\'' && nextChar == '\'' && nextnextChar == '\''){
            return [wordType["QupteWord"], lineNumber + 2];
        } else {
            return [wordType["QupteWord"], lineNumber];
        }
    } else if (sharpWords.includes(char)) {
        return [wordType["SharpWord"], lineNumber];
    } else {
        return [wordType["NoSeparator"], lineNumber];
    }
}