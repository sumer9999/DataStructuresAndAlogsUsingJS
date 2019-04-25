function solution(A, B) {
    A = A.sort((a, b) => a - b);
    B = B.sort((a, b) => a - b);
    let a1 = 0,
        b1 = 0,
        res = [],
        maxSum = Number.NEGATIVE_INFINITY,
        sum = 0;

    while (a1 < A.length && b1 < B.length) {
        if (A[a1] < B[b1]) {
            res.push(1);
            a1++;
        } else {
            res.push(-1);
            b1++;
        }
    }
    while (a1 < A.length) {
        res.push(1);
        a1++;
    }
    while (b1 < B.length) {
        res.push(-1);
        b1++;
    }
    for (let r of res) {
        sum += r;
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}

function solution2(A, B) {
    A = A.sort((a, b) => a - b);
    B = B.sort((a, b) => a - b);
    let a1 = 0,
        b1 = 0,
        res = [],
        maxSum = Number.NEGATIVE_INFINITY,
        sum = 0;

    while (a1 < A.length && b1 < B.length) {
        if (A[a1] < B[b1] || b1 === B.length) {
            res.push(1);
            a1++;
        } else {
            res.push(-1);
            b1++;
        }
    }

    for (let r of res) {
        sum += r;
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}

console.log(solution2([10, 11, 20, 20, 22], [122, 15, 21, 24, 29]));