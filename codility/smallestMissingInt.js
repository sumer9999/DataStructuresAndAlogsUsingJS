function smallestMissing(arr) {
    for (let [i, n] of arr.entries()) {
        let otherIndex = Math.abs(arr[i]) - 1;
        if (arr[otherIndex]) {
            arr[otherIndex] = -1 * Math.abs(arr[otherIndex]);
        }
    }
    let missingIndex = arr.findIndex(e => e > 0);
    return missingIndex + 1;
}
console.log(smallestMissing([1, 4, 19, 3, 4, 1, 2, 6]));




function solution(A) { // Better in sense it handles missing last element; Submitted to codility
    A = A.filter(e => e > 0);

    for (let i = 0; i <= A.length - 1; i++) {
        let otherIndex = Math.abs(A[i]) - 1;
        if (A[otherIndex] && A[otherIndex] > 0) A[otherIndex] *= -1;
    }

    let missingIndex = A.findIndex(e => e > 0);
    return missingIndex > -1 ? missingIndex + 1 : A.length + 1;
}