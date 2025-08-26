//括弧類: ( ) [ ] { }
//区切り記号: , : ; . @
//代入演算子: = += -= *= /= //=, **=, >>=, <<=, &=, |=, ^=, := (ウォルラス演算子)
//算術演算子: + - * / // % **
//比較演算子: < <= > >= == !=
//ビット演算子: & | ^ ~ << >>

class Operator {
    constructor(text, line, column, lineIndex, lineIndexEnd){
        this.type = "Operator",
        this.value = text,
        this.line = line,
        this.column = column,
        this.lineIndex = lineIndex,
        this.lineIndexEnd = lineIndexEnd
    }

    getParameter() {
        return ([
            this.type,
            this.value,
            this.line,
            this.column,
            this.lineIndex,
            this.lineIndexEnd
        ]);
    }
}