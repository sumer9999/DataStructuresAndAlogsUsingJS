function solution(A) {
    let aSet = new Set(A);

    for (let i = 1; i <= A.length; i++) {
        if (!aSet.has(i)) return 0;
    }
    return 1;
}