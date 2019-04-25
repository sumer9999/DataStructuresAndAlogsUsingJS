function solution(S, P, Q) {
    let obj = {}, result = [], fact = { A: 1, C: 2, G: 3, T: 4 };
    [...S].forEach((c, i) => obj[c] = [...(obj[c] || []), i]);
    for (let i = 0, min = 4; i <= P.length - 1; i++ , min = 4) {
        for (let key of Object.keys(obj)) {
            if (obj[key].some(e => (e >= P[i] && e < Q[i]) || e === P[i])) {
                min = Math.min(min, fact[key]);
            }
            if (min === 1) break;
        }
        result.push(min);
    }
    return result;
}

console.log(solution('CAGCCTA', [2, 5, 0], [4, 5, 6]));




//Range Minimum Query
function solution(S, P, Q) {
    let result = [], impactFactor, min;
    for (let i = 0; i <= P.length - 1; i++) {
        min = 4;
        for (let s of S.slice(P[i], Q[i] + 1)) {
            if (s === 'A') impactFactor = 1;
            else if (s === 'C') impactFactor = 2;
            else if (s === 'G') impactFactor = 3;
            else if (s === 'T') impactFactor = 4;
            min = Math.min(min, impactFactor)
            if (min === 1) break;
        }
        result[i] = min;
    }
    return result;
}



function solution2(S, P, Q) {
    const A = [], C = [], G = [], T = [], result = [];

    [...S].forEach((a, i) => {
        if (a === 'A') A.push(i);
        else if (a === 'C') C.push(i);
        else if (a === 'G') G.push(i);
        else T.push(i);
    });

    const check = arr => arr.some(a => a >= P[j] && a <= Q[j]);

    for (var j = 0; j < P.length; j++) {
        if (check(A)) result.push(1)
        else if (check(C)) result.push(2);
        else if (check(G)) result.push(3);
        else result.push(4);
    }

    return result;
}

console.log(solution2('CAGCCTA', [2, 5, 0], [4, 5, 6]));