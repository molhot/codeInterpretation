function makeSeparator(
    word, 
    lineNumber,
    columnNumber,
    indexNumber,
    lastIndexNumber
){
    return new Operator(
        word,
        lineNumber,
        columnNumber,
        indexNumber,
        lastIndexNumber
    )
}