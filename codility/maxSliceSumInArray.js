

function solution(A) {
    let sum = 0, maxSum = Number.NEGATIVE_INFINITY;
    for (let n of A) {
        sum += n;
        maxSum = Math.max(maxSum, sum);

        if (sum < 0) sum = 0;
    }
    return maxSum;
}

function solution(A) {
    let sum = 0, maxSum = Number.NEGATIVE_INFINITY;
    for (let n of A) {
        sum = Math.max(sum + n, 0);
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}


