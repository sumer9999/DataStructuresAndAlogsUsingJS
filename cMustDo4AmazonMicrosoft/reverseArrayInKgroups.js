function solution(A, K) {
    let len = A.length;
    for (let i = 0; i < len; i += K) {
        let start = i, end = Math.min(start + K - 1, len - 1);
        console.log(start, end);
        while (start < end) {
            [A[start], A[end]] = [A[end], A[start]];
            start++;
            end--;
        }
    }
    return A;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 3))