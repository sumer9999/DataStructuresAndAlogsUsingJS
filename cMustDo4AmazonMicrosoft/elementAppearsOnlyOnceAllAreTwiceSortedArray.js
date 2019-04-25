function solution(A) {
    for (let i = 0; i < A.length; i += 2) {
        if (A[i] !== A[i + 1]) return A[i];
    }
}


function solutionBinary(A) {
    let left = 0, right = A.length - 1;
    let mid = parseInt((left + right) / 2);

    while (1) {
        if (getFirstIndex(mid) === -1) return A[mid];

        if (getFirstIndex(mid) % 2 === 0) left = mid + 1;
        else right = mid - 1;

        mid = parseInt((left + right) / 2);
    }


    function getFirstIndex(i) {
        if (A[i - 1] === A[i]) return i - 1;
        else if (A[i + 1] === A[i]) return i;
        return -1;
    }

}

function solutionRecur(A, left = 0, right = A.length - 1) {
    let mid = parseInt((left + right) / 2);

    if (getFirstIndex(mid) === -1) return A[mid];

    if (getFirstIndex(mid) % 2 === 0) return solutionRecur(A, mid + 1, right)
    else return solutionRecur(A, left, mid - 1)

    function getFirstIndex(i) {
        if (A[i - 1] === A[i]) return i - 1;
        else if (A[i + 1] === A[i]) return i;
        return -1;
    }

}
console.log(solutionRecur([1, 1, 2, 2, 3, 3, 4, 50, 50, 65, 65]))