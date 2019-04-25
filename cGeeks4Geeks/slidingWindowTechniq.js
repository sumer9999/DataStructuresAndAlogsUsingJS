function maxSumWindow(arr = [], k) {
    let sum = arr.slice(0, k).reduce((s, n) => s + n), maxSum = sum;

    for (let i = k; i <= (arr.length - 1); i++)
        maxSum = Math.max(maxSum, sum += arr[i] - arr[i - k])

    return maxSum;
}

let k = 4;
//let arr = [4, 0, 1, 5, 9, 2, 4, 7, 8, 1, 2];
//console.log(maxSumWindow(arr, k));


function maxSumNotFixedLength(A) {  //contains both positive and negative values
    let len = A.length;
    let sum = 0;
    let maxSum = Number.NEGATIVE_INFINITY;
    for (let a of A) {               // We can also use simple for of loop here
        sum = Math.max(sum + a, 0);
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}
console.log(maxSumNotFixedLength([4, 1, 3, -4, 6, 2, 6, -23]))