function solution(A) {
    let rMax = [], lMax = [];
    let len = A.length;
    let total = 0;

    for (let i = 0; i < len; i++) {
        lMax[i] = Math.max((lMax[i - 1] === undefined ? A[i] : lMax[i - 1]), A[i]);
    }

    for (let i = len - 1; i >= 0; i--) {
        rMax[i] = Math.max((rMax[i + 1] || A[i]), A[i])
    }
    console.log(lMax)
    console.log(rMax);
    for (let i = 0; i < len; i++) {
        total += Math.min(lMax[i], rMax[i]) - A[i];
    }
    console.log(total);

}

console.log(solution([3, 0, 0, 5, 0, 4]));