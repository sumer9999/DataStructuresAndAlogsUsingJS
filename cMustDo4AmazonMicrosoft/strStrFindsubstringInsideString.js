function solution(S1, S2) {
    for (let i = 0; i < S1.length - S2.length + 1; i++) {
        let j = 0;
        while (j < S2.length) {
            if (S1[i + j] !== S2[j]) break
            j++;
            if (j === S2.length) return i;
        }
    }
    return -1;
}

console.log(solution('ampl', 'ample'));//This is a sample string