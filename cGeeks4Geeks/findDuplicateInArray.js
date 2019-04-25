function findDupInSorted(arr = [], n = 2) {
    let len = arr.length;
    //len -n +1  * (len -n + 1  + 1)
    let expectedSum = ((len - n + 1) * (len - n + 2)) / 2;
    let actualSum = arr.reduce((a, n) => a + n);
    return (actualSum - expectedSum) / (n - 1);

}

let arr = [1, 2, 3, 4, 4, 5, 6, 7, 8];
let arr2 = [4, 5, 5, 6, 7]
console.log(findDupInSortedContinousNOTFROM1(arr2));

function findDupInSortedContinousNOTFROM1(arr) {
    let len = arr.length;
    let n1 = arr[0], n2 = arr[len - 1];

    let totalSum = ((n2) * (n2 + 1)) / 2;
    let smallerSum = ((n1 - 1) * (n1)) / 2
    let expectedSum = totalSum - smallerSum;
    actualSum = arr.reduce((a, n) => a + n);
    return actualSum - expectedSum;

}