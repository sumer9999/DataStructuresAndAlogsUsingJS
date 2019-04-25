// arr = [4, 6, 1, 7, 3, 8, 99, 9, 4, 10];

// function bubbleSort(arr) {
//     for (let i = 0; i <= arr.length - 1; i++) {
//         for (j = 0; j <= arr.length - 2 - i; j++) {
//             if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

//         }
//     }
//     return arr;
// }


// function selectionSort(arr1) {
//     let arr = arr1.slice();
//     for (let i = 0; i <= arr.length - 1; i++) {
//         let minIndex = i;
//         for (j = i + 1; j <= arr.length - 1; j++) {
//             if (arr[j] < arr[minIndex]) minIndex = j;
//         }
//         [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
//     }
//     return arr;
// }


// console.log(arr);
// console.log(selectionSort(arr))


function mSort(A) {
    if (A.length === 1) return A;
    const mid = Math.floor(A.length / 2)
    return merge(mSort(A.slice(0, mid)), mSort(A.slice(mid)))
}

function merge(lArr, rArr) {
    let result = [], lIndex = 0, rIndex = 0;
    while (lIndex < lArr.length && rIndex < rArr.length)
        result.push((lArr[lIndex] < rArr[rIndex]) ? lArr[lIndex++] : rArr[rIndex++])

    return [...result, ...lArr.slice(lIndex), ...rArr.slice(rIndex)];
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log(mSort(list));