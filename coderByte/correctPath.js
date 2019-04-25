function checkPath(str, x = 0, y = 0) {
    for (let c of [...str]) {
        if (c === 'u') x--; if (c === 'd') x++;
        if (c === 'l') y--; if (c === 'r') y++;
        if ((x < 0 || x > 4 || y < 0 || y > 4)) return false;
    }
    return (x === 4 && y === 4);
}
const createCombinations = s => [...s].reduce((a, c) => (c === '?') ? a.reduce((a, s) => [...a, s + 'u', s + 'd', s + 'l', s + 'r'], []) : a.map(s => s + c), ['']);
const CorrectPath = str => {
    for (let pathStr of createCombinations(str))
        if (checkPath(pathStr)) return pathStr;
}
console.log("???rrurdr?");
console.log(CorrectPath("???rrurdr?"));

// function createCombinations(str, permS) {
//     [...str].forEach( 
//         permS = (c === '?') ? permS.reduce((a, str) => [...a, str + 'u', str + 'd', str + 'l', str + 'r'], [])
//             : permS.map(str => str + c));
//     return permS;
// }