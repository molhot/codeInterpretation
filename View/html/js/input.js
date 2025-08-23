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

// タブキー対応（スペース4つ）
editor.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
    e.preventDefault();
    const start = this.selectionStart;
    const end = this.selectionEnd;
    const value = this.value;
    this.value = value.substring(0, start) + '    ' + value.substring(end);
    this.selectionStart = this.selectionEnd = start + 4;
    updateLineNumbers();
    }
});

// 初期化
updateLineNumbers();