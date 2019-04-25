function MSIS(A, i = 0, prev = 0, sum = 0) {
    // Base case: nothing is remaining
    if (i === A.length) { console.log(">>"); return sum; }
    // case 1: exclude the current element and process the remaining elements
    let excl = MSIS(A, i + 1, prev, sum);

    // case 2: include the current element if it is greater than previous element
    let incl = sum;
    if (A[i] > prev) incl = MSIS(A, i + 1, A[i], sum + A[i]);

    return Math.max(incl, excl); // return maximum of above two choices
}
let A = [8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11];
console.log(MSIS(A));