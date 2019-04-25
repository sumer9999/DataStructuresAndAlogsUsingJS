function solution(N) {
    if (N === 1) return 1;
    if (N <= 3) return 2;
    let n, factorCount = 0
    for (n = 2; n * n < N; n++) {
        if (N % n === 0) {
            factorCount += 2;
        }
    }
    if (n * n === N) factorCount++;
    return factorCount + 2;
}