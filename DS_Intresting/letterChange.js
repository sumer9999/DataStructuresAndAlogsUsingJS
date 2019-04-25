function LetterChanges(str) {

    return [...str.trim().toLowerCase()].reduce((newStr, c) => {
        let newChar = c;
        if (c.search('[a-z]') > -1) {
            newChar = String.fromCharCode(c.charCodeAt(0) + 1);
            if (newChar.search('[aeiou]') > -1) newChar = newChar.toUpperCase();
        }
        newStr += newChar;
        return newStr;
    }, '');
}

console.log(LetterChanges('A B*d '));