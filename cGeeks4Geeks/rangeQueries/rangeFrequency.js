function rangeFrequency(A, B, obj = {}) {
    for (let [i, a] of A.entries())
        obj[a] = [...(obj[a] || []), i + 1];
    return obj[B[0]].filter(e => e >= B[1] && e <= B[2]).length
}


let A = [2, 3, 1, 6, 8, 3, 4, 6, 7, 2, 6, 1, 99, 3, 0, 2, 6, 8, 9];
console.log(rangeFrequency(A, [3, 2, 6]));