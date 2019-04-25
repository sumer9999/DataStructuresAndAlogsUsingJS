function rearrangeZero(A = []) {
    let len = A.length, index = 0;
    if (len <= 1) return A;
    for (let i = 0; i < len; i++) {
        if (A[i] !== 0) {
            [A[index], A[i]] = [A[i], A[index]];
            index++;
        }
    }
    return A;
}

function rearrangeOddEven(A = []) {
    let len = A.length, index = 0;
    if (len <= 1) return A;
    for (let i = 0; i < len; i++) {
        if (A[i] % 2 !== 0 && A[index] !== A[i]) {
            [A[index], A[i]] = [A[i], A[index]];
            index++;
        }
    }
    console.log(index);
    return A;
}

function rearrangeGT(A = [], K) {
    let len = A.length, index = 0, swap = 0;
    if (len <= 1) return A;
    for (let i = 0; i < len; i++) {
        if (A[i] > K) { //&& A[index] !== A[i]
            if (A[index] !== A[i]) {
                [A[index], A[i]] = [A[i], A[index]];
                //console.log("SWing", A[i], A[index]);
                swap++;
            }
            index++;
        }
    }
    console.log(swap);
    return A;
}
// let arr = [1, 0, 2, 6, 0, 88, 4, 0, 0, 2, 0];
// console.log(rearrangeZero(arr));
// let arr = [1, 3, 2, 6, 7, 88, 4, 0, 5, 2, 90];
// console.log(rearrangeOddEven(arr));
let arr3 = [2, 5, 1, 6, 3];   //k=3
//let arr4 = [2, 7, 9, 5, 8, 7, 4]; //k=5
console.log(rearrangeGT(arr3, 3));