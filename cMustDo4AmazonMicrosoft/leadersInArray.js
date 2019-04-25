function solution(A, res = []) {
    let max = A[A.length - 1];
    for (let i = A.length - 1; i >= 0; i--) {
        max = Math.max(max, A[i]);
        if (A[i] === max) res.push(A[i]);
    }
    return res.reverse();
}

console.log(solution([7, 4, 5, 7, 3]));