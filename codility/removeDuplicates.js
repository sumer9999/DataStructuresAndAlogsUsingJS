function removeDuplicatesUnsorted(arr) {
    let arr2 = [];
    // return arr2;
    for (let a of arr) {
        if (!arr2.includes(a)) arr2.push(a);
    }
    return arr2//Array.from(new Set(arr));
}

function removeDuplicateSortedArray(arr) {
    let j = 0;
    for (let [i, a] of arr.entries()) {
        if (arr[i] !== arr[i + 1]) {
            arr[j++] = a;
        }
    }
    console.log(j, arr.slice(0, j));
}

console.log(removeDuplicateSortedArray([1, 2, 2, 2, 2, 6, 8, 8, 9]));