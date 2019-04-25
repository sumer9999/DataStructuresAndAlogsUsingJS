function findSumSortedArray(A, K) { //Since its sorted its better to use two pointer technique here
    let l = 0, r = A.length - 1, sum = A[l] + A[r];   // In other unsorted solution we used two loops and hash
    while (K !== sum && r >= l) {
        if (sum > K) r--;
        else l++;
        sum = A[l] + A[r];
    }
    console.log(l, r);
    if (r <= l) return -1
    else return [A[l], A[r]];

}

arr = [1, 2, 5, 7, 10, 13, 17];
console.log(findSumSortedArray22(arr, 15));

function findSumSortedArray22(A, K) {
    let l = 0, r = A.length - 1, sum = A[l] + A[r];
    while (l < r) {
        if (sum > K) r--;
        else if (sum < K) l++;
        else break;

        sum = A[l] + A[r];
    }

    if (r <= l) return -1
    else return [A[l], A[r]];
}