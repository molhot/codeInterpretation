let lineOperatorList = [];

editor.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        lexer(lineOperatorList);
    }
});