let currentFontSize = 16; // Начальный размер шрифта

function changeFontSize(delta) {
    currentFontSize += delta;
    document.body.style.fontSize = currentFontSize + 'px';
}
