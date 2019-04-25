function doubleFirst(A) {
    let len = A.length;
    for (let i = 0; i <= len - 2; i++) {
        if (A[i] !== 0 && A[i] === A[i + 1]) {
            A[i] = 2 * A[i];
            A[i + 1] = 0;
            i++;
        }
    }
    for (let i = 0, bk = 0; i <= len - 1; i++) {
        if (A[i] !== 0) {
            [A[i], A[bk]] = [A[bk], A[i]]
            bk++;
        }
    }
    return A;
}


let arr = [0, 2, 2, 2, 0, 6, 6, 0, 0, 8];
console.log(doubleFirst(arr));