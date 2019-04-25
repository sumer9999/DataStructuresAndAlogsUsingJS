function LetterChanges(str) {
    return [...str.trim().toLowerCase()].reduce((acc, ch) => {
        if (ch.search(/[a-z]/) < 0) return acc + ch;
        ch = ch === 'z' ? 'a' : String.fromCharCode(ch.charCodeAt(0) + 1);
        ch = /[aeiou]/.test(ch) ? ch.toUpperCase() : ch;
        return acc + ch;
    }, '');
}

console.log(LetterChanges("Argument   #goeHs herez   "))