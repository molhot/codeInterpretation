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