function prefixianIndex(A, Q) { //Number of indexes with equal elements in given range
    let pfs = Array(A.length).fill(0);
    for (let i of A.keys()) {
        pfs[i] = (pfs[i - 1] || 0) + ((A[i] === A[i + 1]) ? 1 : 0);
    }


    for (let q of Q) {
        let l = q[0], r = q[1];
        let noOFIndexes = (pfs[r - 1] || 0) - (pfs[l - 1] || 0);
        console.log(noOFIndexes);
    }
    console.log(pfs);
}

let A = [1, 2, 2, 2, 3, 3, 4, 4, 4];
console.log(prefixianIndex(A, [[1, 8], [0, 4]]));