function checkSquared(S11, S22) {
    let freqObj = {};
    let S1 = S11.toLowerCase(), S2 = S22.toLowerCase();

    if (S1.length !== S2.length) return false;
    for (let i = 0; i <= S1.length - 1; i++) {
        freqObj[S1[i]] = (freqObj[S1[i]] || 0) + 1;
    }

    for (let i = 0; i <= S2.length - 1; i++) {
        if (S2[i] in freqObj) freqObj[S2[i]] -= 1;
        else return false;
    }
    return Object.values(freqObj).filter(e => e > 0).length === 0;
}


console.log(checkSquared('mym', 'yMm'));