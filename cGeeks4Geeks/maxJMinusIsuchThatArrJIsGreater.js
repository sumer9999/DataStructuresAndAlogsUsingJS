//Best Solution
function maxJMinusI(A) {  // 0< i< j, find max j-i where A[j] > A[i]
    let lMin = [], rMax = [], len = A.length;
    for (let i = 0; i < len; i++)
        lMin[i] = Math.min((lMin[i - 1] || A[i]), A[i]);

    for (let i = len - 1; i >= 0; i--)
        rMax[i] = Math.max((rMax[i + 1] || A[i]), A[i]);

    console.log(lMin); console.log(rMax);

    let i = 0; j = 0; maxDiff = -1;
    while (j < len && i < len) {
        if (rMax[j] > lMin[i]) {
            maxDiff = Math.max(maxDiff, j - i);
            j++
        }
        else i++;
    }
    return maxDiff;
}

console.log(maxJMinusI2([9, 2, 3, 4, 5, 6, 7, 8, 18, 0]));

function maxJMinusI2(A) { //checking if I remember to code
    let lMin = [], rMax = [];
    let maxDiff = 0;

    for (let i = 0; i < A.length; i++)
        lMin[i] = Math.min(A[i], (lMin[i - 1] || A[i]))

    console.log(lMin);

    for (let i = A.length - 1; i >= 0; i--)
        rMax[i] = Math.max((rMax[i + 1] || A[i]), A[i])
    console.log(rMax);


    for (let i = 0, j = 0; i < A.length && j < A.length;) {
        if (rMax[j] > lMin[i]) {
            maxDiff = Math.max(maxDiff, j - i);
            j++;
        }
        else {
            i++;
        }

    }

    return maxDiff;
}