const tokenResultShowArea = document.getElementById('resultArea');

function showTokenResult (allSeparatorList) {
    tokenResultShowArea.innerText = "";
    resultHtml = "";
    for (let lineNum = 0; lineNum < allSeparatorList.length; lineNum++){
        resultHtml = resultHtml + lineSeparatorList(lineNum, allSeparatorList[lineNum]);
    }
    tokenResultShowArea.innerHTML = resultHtml;
}

function lineSeparatorList (lineNum, separatorList){
    console.log(separatorList);
    htmlText = `
        <hr>
        <div class="lineNum">
            ${lineNum} 行目
        </div>
        <hr>
    `;
    for (let separatorNum = 0; separatorNum < separatorList.length; separatorNum++){
        let type = separatorList[separatorNum]["type"];
        let value = separatorList[separatorNum]["value"];
        let column = separatorList[separatorNum]["column"];
        let lineIndex = separatorList[separatorNum]["lineIndex"];
        let lineIndexEnd = separatorList[separatorNum]["lineIndexEnd"];

        htmlText += `
            <div class="token">
                <div><strong>Type:</strong> ${type}</div>
                <div><strong>Value:</strong> ${value}</div>
                <div><strong>Column:</strong> ${column}</div>
                <div><strong>Line Index:</strong> ${lineIndex}</div>
                <div><strong>Line Index End:</strong> ${lineIndexEnd}</div>
            </div>
        `;
    }
    return htmlText;
}