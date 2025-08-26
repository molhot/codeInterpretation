class ErrorWord {
    constructor(text, line, column, lineIndex, lineIndexEnd){
        this.type = "Error",
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