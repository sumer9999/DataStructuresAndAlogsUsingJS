function solution(M, A) {  //Efficient solution
    const LIMIT = 1000000000;
    let lastPos = [], i = 0, count = 0, start = 0;
    if (A.length === 1) return 1;

    for (i = 0; i <= M; i++)
        lastPos[i] = -1;

    for (i = 0; i < A.length; i++) {
        let item = A[i];
        if (lastPos[item] >= start)
            start = lastPos[item] + 1;

        lastPos[item] = i;
        count += i - start + 1;

        if (count > LIMIT) return LIMIT;
    }
    return count;
}


function solution2(M, A) {  //Works well but not efficient solution
    let count = 0, maxFr = Number.NEGATIVE_INFINITY;
    for (let bk = 0; bk < A.length; bk++) {
        let fr = bk;
        while (fr < A.length && (!A.slice(bk, fr).includes(A[fr]))) {
            count++;
            fr++;
        }
    }
    return count;
}

console.log(solution(5, [3, 4, 5, 5, 2]));

function solutionBAD(M, A) {  //BAD SOLUTION, 
    let back = 0, front = 0;
    let totalSum = 0;
    while (front < A.length) {
        if (A.slice(back, front).includes(A[front])) {
            let diff = front - back;
            totalSum += ((1 + diff) * diff) / 2;
            back = front;

            if (totalSum > 1000000000) break;
        }
        front++;
    }

    let diff = front - back;
    totalSum += ((1 + diff) * diff) / 2; //Collect cobination after last duplicate;
    if (totalSum > 1000000000) return 1000000000;
    return totalSum;
}