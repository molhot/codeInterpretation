const line_text_stroe = "";

class SharpToken {
    constructor (line) {
        if (this.isSharpToken(line)){
            this.tokenText = this.setTokenTextFromLine(line);
        } else {
            this.tokenText = null;
        };
    }

    isSharpToken(line) {
        return line.includes('#');
    }

    setTokenTextFromLine(line) {
        return line.split('#')[1];
    }

    getToken() {
        return this.tokenText;
    }
}

function ConvertLineTextToToken(sharpTokenClass) {
    console.log(sharpTokenClass.getToken());
}

editor.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const currentLine = editor.value.split('\n').at(-1);
        const line_text = editor.value.split('\n').at(-1);
        const sharpTokenClass = new SharpToken(line_text);

        if (line_text.at(-1) == '\\'){
            let contextCheck = checkIncludeBackSlashText(line, sharpTokenClass);
            if (!contextCheck){
                const styled = `<span class="invalid">${currentLine}</span>\n`;
                output.innerHTML += styled;
            }
            line_text_stroe = line_text_stroe + line_text;
        } else {
            ConvertLineTextToToken(sharpTokenClass);
        }
    }
});

function checkIncludeBackSlashText(line){
    let isBackSlash = false;
    let isSharp = false;

    for (let textNum = 0; textNum <= line.length(); textNum){
        if (line[textNum] == '#'){
            if (isBackSlash && !isSharp){
                return false;
            }

            isSharp = true;
        }

        if (line[textNum] == '\\'){
            isBackSlash = true;
        }
    }
    return true;
}