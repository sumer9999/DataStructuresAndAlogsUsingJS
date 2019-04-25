function binary(A, num, l = 0, r = A.length - 1) {
    while (l <= r) {
        let mid = parseInt((l + r) / 2);
        if (num === A[mid]) return mid;  // if (num === A[mid + 1]) return mid + 1;// if (num === A[mid - 1]) return mid - 1;
        num < A[mid] ? r = mid - 1 : l = mid + 1;
    }
    return -1;
}


function binaryRec(A, num, l = 0, r = A.length - 1) {
    let mid = Math.floor((l + r) / 2);
    if (num === A[mid]) return mid;
    if (l === r) return -1;
    return (A[mid] > num) ? binaryRec(A, num, l, mid - 1) : binaryRec(A, num, mid + 1, r);

}

console.log(binaryRec([1, 3, 5, 7, 9, 11, 14, 17, 19], 3))