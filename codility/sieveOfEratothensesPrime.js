function returnArrayOfPrime(N) {
    let pArr = Array(N + 1).fill(0);
    for (let i = 2; i * i <= N; i++) {
        if (pArr[i] === 0) {
            for (let k = i * i; k <= N; k += i)
                pArr[k] = i;
        }
    }
    return pArr;
}

function returnObjectOfPrime(N) {
    let pSet = new Set();
    for (let [i, val] of returnArrayOfPrime(N).entries()) {
        if (val === 0 && i > 0) {
            pSet.add(i);
        }
    }
    return pSet;
}

function findSmallestMissingPrime(A) {
    let maxValue = A.reduce((max, cur) => cur > max ? cur : max);
    let pSet = returnObjectOfPrime(maxValue);

    for (let a of A) {
        if (pSet.has(a)) pSet.delete(a);
    }

    return [...pSet.values()][0];
}


console.log(findSmallestMissingPrime([1, 2, 3, 4, 5, 6, 7, 9, 10, 12, 13, 14]));