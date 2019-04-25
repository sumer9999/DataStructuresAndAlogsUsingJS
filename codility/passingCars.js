function solution(A) {    //Best Solution and cleaner variable names
    let eastCars = 0,
        westCarsCrossingCount = 0;
    for (let a of A) {
        if (a === 0) eastCars++;
        else westCarsCrossingCount += eastCars

        if (westCarsCrossingCount > 1000000000) return -1;
    }
    return westCarsCrossingCount;
}

function solution(A) {
    let countZero = 0, total = 0;
    if (A.length > 1000000000);
    for (let a of A) {
        if (a === 0) countZero++;
        else total += countZero
    }
    return total;
}


function solution2(A) {
    let east = A.reduce((acc, n, i) => n === 0 ? [...acc, i] : acc, []);
    let west = A.reduce((acc, n, i) => n === 1 ? [...acc, i] : acc, []);
    count = 0;
    for (e of east) {
        for (w of west) {
            if (w > e) count++;
        }
    }
    return count;
}
console.log(solution([0, 1, 0, 1, 1]));



//(0, 1), (0, 3), (0, 4), (2, 3), (2, 4).