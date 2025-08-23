class SharpToken {
    constructor (line) {
        if (this.isSharpToken(line)){
            this.tokenText = this.setTokenTextFromLine(line);
        } else {
            this.tokenText = null;
        };
    }

    isSharpToken(line) {
        for (const char of line){
            if (char == '#'){
                return true;
            }
        }
        return false;
    }

    setTokenTextFromLine(line) {
        console.log(line.split('#'));
        return line.split('#')[1];
    }

    getToken() {
        return this.tokenText;
    }
}

function ConvertLineTextToToken() {
    const line_text = editor.value.split('\n').at(-1);
    const sharpTokenClass = new SharpToken(line_text);
    console.log(sharpTokenClass.getToken());
}

editor.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        ConvertLineTextToToken();
    }
});