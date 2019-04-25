function searchNum(arr, num) {
    let pivotIndex = pivot(arr);
    //console.log(pivotIndex);
    let index = binarySearch(arr, 0, pivotIndex - 1, num)
        || binarySearch(arr, pivotIndex, arr.length - 1, num)

    return index;
    function binarySearch(arr, l = 0, r = arr.length - 1, key) {
        mid = l + parseInt((r - l) / 2);
        if (key === arr[mid]) return mid;
        if (key === arr[l]) return l;
        if (key === arr[r]) return r;

        return (key > arr[mid]) ? binarySearch(arr, mid + 1, r, key) : binarySearch(arr, l, mid, key)
    }

    function pivot(A, l = 0, r = A.length - 1) {
        if (A[r] > A[l]) return - 1;
        mid = l + parseInt((r - l) / 2);
        if (A[mid] > A[mid + 1]) return mid + 1;
        if (A[mid] < A[mid - 1]) return mid;
        if (r - l <= 2) return;
        return A[r] > A[mid] ? pivot(A, l, mid) : pivot(A, mid + 1, r);
    }
}

let arr = [10, 15, 3, 4, 5, 6, 7, 9];

console.log(searchNum(arr, 15));
