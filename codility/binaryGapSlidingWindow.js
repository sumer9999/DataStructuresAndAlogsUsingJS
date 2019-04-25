function solution(N) {
    if (N <= 4) return 0;
    let binStr = N.toString(2);
    let back = 0, front = 1, maxGap = 0;
    while (front < binStr.length) {
        if (binStr[front] === '0' && binStr[front - 1] === '1') {
            back = front
        }
        if (binStr[front] === '0' && binStr[front + 1] === '1') {
            maxGap = Math.max(maxGap, front - back + 1);
        }
        front++;
    }
    return maxGap;
}

console.log(solution(1041))

function solution22(N) { //This is wrong for boundry cases like 00000010
    let str = N.toString(2), zeroCount = 0, max = 0;
    for (let digit of str) {
        if (digit === '0') {
            zeroCount += 1;
        } else /* if ( digit === '1' ) */ {
            max = Math.max(max, zeroCount);
            zeroCount = 0;
        }
    }
    return max;
}