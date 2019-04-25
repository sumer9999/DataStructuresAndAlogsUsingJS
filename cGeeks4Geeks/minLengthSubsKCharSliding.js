function minLength(S = "ababcb", K = 3) {
    let back = 0, front = 0, minS = S;
    console.log(countChars(S));
    while (front < S.length) {
        if (countChars(S.slice(back, front + 1)) >= K) {
            while (countChars(S.slice(back, front + 1)) >= K) {
                if (minS.length > S.slice(back, front + 1).length) {
                    minS = S.slice(back, front + 1);
                }
                back++;
            }
        }
        front++
    }
    return minS;
}

function countChars(S) {
    let aObj = [...S].reduce((aObj, c) => {
        aObj[c] = ++aObj[c] || 1;
        return aObj;
    }, {});
    return Object.keys(aObj).length;
}

console.log(minLength('efecfefd', 4));