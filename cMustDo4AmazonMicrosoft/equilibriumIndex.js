function solution(A) {
    if (A.length === 1) return A[0];

    let totalSum = A.reduce((a, n) => a + n);

    let leftSum = 0,
        rightSum = 0;

    for (let i = 0; i < A.length - 1; i++) {
        leftSum += A[i];
        rightSum = totalSum - A[i + 1] - leftSum;
        if (leftSum === rightSum) {
            return i + 1;
        }
    }


}

console.log(solution([-7, 1, 5, 2, -4, 3, 0]));