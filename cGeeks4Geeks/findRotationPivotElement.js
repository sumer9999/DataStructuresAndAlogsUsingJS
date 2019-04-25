function pivot(A, l = 0, r = A.length - 1) {
    if (A[r] > A[l]) return -1;
    mid = l + parseInt((r - l) / 2);
    if (A[mid] > A[mid + 1]) return mid + 1;
    if (A[mid] < A[mid - 1]) return mid;
    if (r - l <= 2) return;
    return A[r] > A[mid] ? pivot(A, l, mid) : pivot(A, mid + 1, r);

}
arr = [10, 1, 3, 5, 6, 8, 9];
console.log(pivot(arr));

// Async   // await new Promise((resolve) => {
    //     setTimeout(() => { console.log("..."); resolve(1) }, 1000);
    // });