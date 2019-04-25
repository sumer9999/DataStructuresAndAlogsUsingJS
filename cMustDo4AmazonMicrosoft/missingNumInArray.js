function solution(A) {
    let len = A.length;
    let expectedSum = ((len + 1) * (len + 2)) / 2;
    let actualSum = A.reduce((sum, n) => sum + n);
    return expectedSum - actualSum;
}

//console.log(solution([1, 2, 3, 4, 5]));    //[1, 2, 3, 4, 5, 6, 7, 9, 10]
console.log(solutionBinary([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function solutionBinary(A, l = 0, r = A.length - 1) {
    let mid = Math.trunc((l + r) / 2);
    if (mid + 1 === A[mid] && mid + 2 !== A[mid + 1]) return mid + 2;
    if (mid === A[mid - 1] && mid + 1 !== A[mid]) return mid + 1;
    return (mid + 1 === A[mid]) ? solutionBinary(A, mid + 1, r) : solutionBinary(A, l, mid - 1);
}


