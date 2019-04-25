function searchPivot(A, l = 0, r = A.length - 1) {
    let mid = parseInt((l + r) / 2);
    while (l < mid && r > mid) {


    }

}


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

function binarySearchGT(A, num, l = 0, r = A.length - 1) {
    while (l <= r) {
        mid = parseInt((l + r) / 2);
        if (num === A[mid]) return mid;
        if (l === r) return Math.min(r + 1, A.length - 1);
        if (num < A[mid]) r = mid - 1;
        else l = mid + 1;
    }
}

function binarySearchLT(A, num, l = 0, r = A.length - 1) {
    while (l <= r) {
        mid = parseInt((l + r) / 2);
        if (num === A[mid]) return mid;
        if (l === r) return Math.max(r - 1, 0);
        if (num < A[mid]) r = mid - 1;
        else l = mid + 1;
    }
}

function binarySearchMid(A, num, l = 0, r = A.length - 1) {
    while (l <= r) {
        mid = parseInt((l + r) / 2);
        if (A[mid + 1] < A[mid] && A[mid - 1] < A[mid]) return mid;

        if (A[mid + 1] < A[mid]) r = mid - 1;
        else l = mid + 1;
    }

}

let A = [1, 5, 8, 9, 12, 15, 19, 21, 27, 29, 32, 57, 67, 87, 99];
let A2 = [10, 20, 80, 100, 200, 400, 500, 8, 3, 2, 1];

// console.log(binarySearchLT(A, 88));
//console.log(binarySearchMid(A2));
//console.log(binarySearch2Recur(A, 27));




function pivotRecur(A, l = 0, r = A.length - 1) {
    if (A[r] > A[l]) return -1;
    //mid = l + parseInt((r - l) / 2);
    mid = parseInt((l + r) / 2);
    if (A[mid] > A[mid + 1]) return mid + 1;
    if (A[mid] < A[mid - 1]) return mid;
    if (r - l <= 2) return;
    return A[r] > A[mid] ? pivotRecur(A, l, mid - 1) : pivotRecur(A, mid + 1, r);

}

function pivotWhile(A, l = 0, r = A.length - 1) {  //Non Recursive Solution

    while (A[r] < A[l]) {
        mid = parseInt((l + r) / 2);
        if (A[mid] > A[mid + 1]) return mid + 1;
        if (A[mid] < A[mid - 1]) return mid;
        (A[r] > A[mid]) ? r = mid - 1 : l = mid + 1;
    }
    return -1;
}


arr = [10, 1, 3, 5, 6, 8, 9];
console.log(pivotRecur(arr));