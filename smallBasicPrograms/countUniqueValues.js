function countUnique(A) {
    let count = 0;
    for (let i = 0; i <= A.length - 1; i++) {
        if (A[i - 1] === undefined || A[i - 1] !== A[i]) {
            count++;
        }
    }
    return count;
}

//console.log(countUnique([0, 1, 1, 1, 1, 2, 2]));
console.log(sliceUnique2([0, 1, 1, 1, 1, 2, 2]));


function sliceUnique(A) {
    //return [...new Set(A)];      //Single Line using Set()
    let result = [];
    for (let i = 0; i <= A.length - 1; i++) {
        if (A[i - 1] === undefined || A[i - 1] !== A[i]) {
            result.push(A[i]);
        }
    }
    return result;
}
function sliceUnique2(A) { //Without Using Extra Space but will edit the existing array
    if (A.length === 1) return A.slice();
    let back = 0, front = 1;

    while (front <= A.length - 1) {
        if (A[back] !== A[front]) {
            back++;
            A[back] = A[front];
        }
        front++;
    }
    return A.slice(0, back + 1);
}

function sliceUnique3(A) { //Same as Above solution but with for loop
    if (A.length === 1) return A.slice();
    let back = 0;

    for (let front = 0; front <= A.length - 1; front++) {
        if (A[back] !== A[front]) {
            back++;
            A[back] = A[front];
        }
    }
    return A.slice(0, back + 1);
}