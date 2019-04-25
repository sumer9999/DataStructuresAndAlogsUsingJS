function solution(A) {
    return A.sort((a, b) => +("" + b + "" + a) - +("" + a + "" + b))
        .reduce((str, n) => str + n, '');
}

console.log(solution([54, 546, 548, 60]));