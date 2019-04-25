function solution(A, K) {
    let min = Number.POSITIVE_INFINITY;
    let len = A.length;
    A = A.sort((a, b) => a - b);
    let back = 0, front = K - 1;
    while (front < len) {
        min = Math.min(min, A[front] - A[back])
        front++;
        back++;
    }
    return min;
}

console.log(solution([7, 3, 2, 4, 9, 12, 56], 3))