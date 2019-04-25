function solution(A) {
    if (A.length <= 1) return A;

    for (let i = 1; i < A.length; i += 2) {
        [A[i], A[i - 1]] = [A[i - 1], A[i]];
    }
    return A;
}

console.log(solution([1]));