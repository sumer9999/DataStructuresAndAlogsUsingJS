var convert = function (s, rows) {
    let len = s.length, i = 0, r = 0, c = 0;
    let output = [...Array(rows)].map(e => []);

    while (i < len) {
        for (let r = 0; r < rows && i < len; r++) output[r][c] = s[i++];
        for (let r = rows - 2; r >= 1 && i < len; r--) output[r][++c] = s[i++];
        c++;
    }

    return output.reduce((a, c) => a + c.join(''), '');
};

console.log(convert("PAYPALISHIRING", 4))


// for (let i = 0; i < len; i++) {
//     //console.log(s[i]);
//     output[r][c] = s[i];
//     r++

//     if(r === rows) {
//         c++;

//     }
// }