function minSwap(arr = [], K) {
    let count = 0, badCount = 0;
    for (let a of arr)
        if (a <= K) count++;

    for (let a of arr.slice(0, count))
        if (a > K) badCount++;

    let minCount = badCount;
    for (let i = count, j = 0; i < arr.length; i++ , j++) {
        if (arr[j] > K) badCount--;
        if (arr[i] > K) badCount++;
        minCount = Math.min(badCount, minCount);
    }
    return minCount;
}


let arr = [2, 5, 1, 6, 3];
console.log(minSwap(arr, 3));