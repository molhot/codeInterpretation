//more 連続入力に対応するかどうかを考えるべきかも

const editor = document.getElementById('editor');
const lineNumbers = document.getElementById('line-numbers');

// 行番号更新
function updateLineNumbers() {
    const lines = editor.value.split('\n').length;
    let lineNumbersText = '';

    for (let i = 1; i <= lines; i++) {
    lineNumbersText += i + '\n';
    }

    lineNumbers.innerHTML = lineNumbersText.split('\n').map(line => line).join('<br>');
}

// イベント登録
editor.addEventListener('input', updateLineNumbers);
editor.addEventListener('scroll', () => {
    lineNumbers.scrollTop = editor.scrollTop;
});

// 初期化
updateLineNumbers();