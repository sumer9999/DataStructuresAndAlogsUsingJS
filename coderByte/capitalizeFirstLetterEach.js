const LetterCapitalize = str => [...str.toLowerCase()].
    reduce((a, c, i) => a + ((i === 0 || str[i - 1] === ' ') ? c.toUpperCase() : c), '').trim();

console.log(LetterCapitalize("argument goes here"));
    //' jab tak jahn mei subah sham hai'));