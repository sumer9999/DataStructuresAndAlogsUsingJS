function solution(A, K) {
    let len = A.length;
    K = K % (len);
    if (len <= 1 || K === 0) return A;
    return A.slice(len - K).concat(A.slice(0, len - K));
}