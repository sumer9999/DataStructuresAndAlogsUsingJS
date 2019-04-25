function solution(A) {
    let sum = 0, maxSum = 0;
    for (let a of A) {
        sum = Math.max(sum + a, 0);
        maxSum = Math.max(maxSum, sum);
    }

    if (maxSum === 0) return A.reduce((max, n) => max > n ? max : n);

    return maxSum;
}

console.log(solution([-1, - 2, - 3, - 4]))