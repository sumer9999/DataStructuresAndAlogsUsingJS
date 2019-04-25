function solution(A) {
    let rMin = [], lMax = [];
    let len = A.length;
    let total = 0;

    for (let i = 0; i < len; i++) {
        lMax[i] = Math.max((lMax[i - 1] || A[i]), A[i]);
    }

    for (let i = len - 1; i >= 0; i--) {
        rMin[i] = Math.min((rMin[i + 1] || A[i]), A[i])
    }

    for (let i = 0; i < len; i++) {
        if (rMin[i] === lMax[i]) return lMax[i]
    }

    return -1;

}


console.log(solution([4, 3, 2, 7, 8, 9]))