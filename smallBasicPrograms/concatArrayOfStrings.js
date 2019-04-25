function concatArr(A, sep = '*') {
    let joinArr = A[0];
    for (let str of A.slice(1)) {
        joinArr = [...joinArr, sep, ...str];
    }
    return joinArr.join('');
}

let A = ['My', 'Name', 'is', 'Sumer'];
console.log(concatArr(A));

let d = new Date()