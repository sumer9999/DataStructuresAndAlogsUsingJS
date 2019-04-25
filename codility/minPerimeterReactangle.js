function solution(N) {
    if (N === 1) return 4;
    if (N === 2) return 6;
    if (N === 3) return 8;
    let side1, side2;
    let sqrt = Math.floor(Math.sqrt(N));
    for (let i = sqrt; i >= 1; i--) {
        if (N % i === 0) {
            side1 = i;
            break;
        }
    }
    return 2 * (side1 + N / side1);
}




function titleCase(S) { // Not related to above problem, this function capitalizes first character of each word
    return [...S].reduce((newStr, c, i) =>
        (S[i - 1] === undefined || S[i - 1] === ' ') ? newStr + S[i].toUpperCase() : newStr + S[i])
}

console.log(titleCase('i am going under drowing for you'));