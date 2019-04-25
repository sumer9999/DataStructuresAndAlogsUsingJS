function prevNext(A) {
    let prev = A[0], next;;
    for (let i = 0; i < A.length; i++) {
        next = (A[i + 1] || A[i]);
        current = prev * next;
        prev = A[i];
        A[i] = current;
    }
    return A;
}

let arr = [2, 3, 4, 5, 6];
console.log(prevNext(arr));
