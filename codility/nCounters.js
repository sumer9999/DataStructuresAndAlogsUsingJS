function solution(N, A) {
    let result = Array(N).fill(0), max = 0, resetLimit = 0;
    for (let a of A) {
        if (a <= N) {
            if (result[a - 1] < resetLimit) {
                result[a - 1] = resetLimit + 1;
            } else {
                result[a - 1]++;
            }
            max = Math.max(max, result[a - 1])
        }
        else {
            resetLimit = max;
        }
    }

    result = result.map(e => e > resetLimit ? e : resetLimit)
    return result;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));

function solutionInefficient(N, A) {
    let
        A = A.filter(n => n < N + 1);
    console.log(A);
    let nArr = Array(N).fill(0), curMax = 0;
    for (n of A) {
        if (n === N + 1) {
            nArr = nArr.map(e => curMax);
        } else {
            nArr[n - 1]++;
            curMax = Math.max(curMax, nArr[n - 1]);
        }
    }
    return nArr;
}


    //5, [3, 4, 4, 6, 1, 4, 4]));
