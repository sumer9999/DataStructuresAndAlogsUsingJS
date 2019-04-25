function rangeAdd(N, operations) {
    let A = Array(N).fill(0);
    for (let [value, start, stop] of operations) {
        A[start] = (A[start] || 0) + value;
        A[stop + 1] = (A[stop + 1] || 0) - value;
    }
    let sum = A[0];
    for (let i = 1; i < N; i++) {
        sum += A[i];
        A[i] = sum;
    }
    return A.slice(0, N);
}
console.log(rangeAdd(6, [[100, 0, 2], [100, 1, 5], [100, 2, 3]]))