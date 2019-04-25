function reorderIndex(arr, indexArr) {  //Efficient Solution
    let set = new Set();
    for (let [i, val] of indexArr.entries()) {
        if ((!set.has(val))) { //i !== val &&  !set.has(i)) && 
            [arr[i], arr[val]] = [arr[val], arr[i]];
            [indexArr[i], indexArr[val]] = [indexArr[val], indexArr[i]];
            set.add(val)
        }
    }
    return arr;
}

let arr = [10, 11, 12];
let indexArr = [1, 2, 0];

let arr2 = [50, 40, 70, 60, 90];
let indexArr2 = [3, 0, 4, 1, 2];

console.log(reorderIndex(arr2, indexArr2));

function reorderIndex2(A, I) {   //Simple non efficient solution
    let newArr = [];
    for (let [i, val] of I.entries()) {
        newArr[val] = A[i];
    }
    return newArr;
}



// function reorderIndex(arr, indexArr) {
//     let set = new Set();
//     for (let [i, val] of indexArr.entries()) {
//         if ((!set.has(i)) && (!set.has(val))) { //i !== val && 
//             [arr[i], arr[val]] = [arr[val], arr[i]];
//             set.add(i, val)
//         }
//     }
//     return arr;
// }