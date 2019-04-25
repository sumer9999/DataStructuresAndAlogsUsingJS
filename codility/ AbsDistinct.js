function solution(A, obj = {}) {
    for (let a of A) obj[Math.abs(a)] = ++obj[Math.abs(a)] || 1;

    return Object.keys(obj).length;
}