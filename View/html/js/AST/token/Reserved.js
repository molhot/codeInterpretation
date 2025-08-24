//False None True and as assert async await break class continue
//def del elif else except finally for from global if
//import in is lambda match nonlocal not or pass raise
//return try while with yield

class Reserved {
    constructor(text, line, column, lineIndex, lineIndexEnd){
        this.type = "Reserved",
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