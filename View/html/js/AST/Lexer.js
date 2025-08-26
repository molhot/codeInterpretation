let CharNumController = 0;
let lineNumComtroller = 0;
let separatorList = [];

function lexer(lineOperatorList){
    // let code_line = "";

    const lastLine = editor.value.split('\n').at(-1);
    //まずは一行のみを対象にする
    for (let charNum = 0; charNum <= lastLine.length; charNum++)
    {
        let beforeCharNum = charNum;
        let lineWordType = 0;
        let result = getSeparator(
            lastLine[charNum], 
            lastLine[charNum + 1], 
            lastLine[charNum + 2], 
            charNum
        );

        lineWordType = result[0];
        charNum = result[1];
        if (lineWordType != wordType["NoSeparator"]){
            separatorList.push(
                makeSeparator(
                    lastLine.substring(beforeCharNum, charNum + 1),
                    lineNumComtroller,
                    beforeCharNum,
                    CharNumController,
                    CharNumController + (charNum - beforeCharNum)
            ));
        }
        CharNumController++;
    }
    lineOperatorList.push(separatorList);
    console.log(lineOperatorList);
    lineNumComtroller++;
    separatorList = [];
    showTokenResult(lineOperatorList);
}