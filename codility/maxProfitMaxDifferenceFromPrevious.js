function solution(A) { //Solution for buying and sellig only once.
    let min = Number.POSITIVE_INFINITY, maxDiff = Number.NEGATIVE_INFINITY;
    for (let n of A) {
        min = Math.min(min, n);
        maxDiff = Math.max(maxDiff, n - min);
    }
    return maxDiff;
}


function solution2(A) { //Same as Above, More relevant variable names
    let minUptoHere = Number.POSITIVE_INFINITY,
        MaxDiffTillNow = 0;
    for (let num of A) {
        minUptoHere = Math.min(minUptoHere, num);
        MaxDiffTillNow = Math.max(MaxDiffTillNow, num - minUptoHere);
    }
    return MaxDiffTillNow;
} 