function solution(A) {
    let back = 0, front = 1;
    let maxLen = 0;
    let zeroCount = 0, oneCount = 0;
    (A[0] === 0) ? zeroCount++ : oneCount++;
    (A[1] === 0) ? zeroCount++ : oneCount++;

    while (front < A.length) {
        if (zeroCount === oneCount) {
            maxLen = Math.max(maxLen, 1 + front - back);
            front++;
        }

        if (zeroCount > oneCount || front === back) {
            front++;
            (A[front] === 0) ? zeroCount++ : oneCount++;
        } else {
            (A[back] === 0) ? zeroCount-- : oneCount--;
            back++;
        }
    }
    return maxLen;
}


console.log(solution([0, 1, 0]))