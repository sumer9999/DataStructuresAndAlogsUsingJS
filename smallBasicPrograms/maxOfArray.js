function max(A) {
    let max = Number.NEGATIVE_INFINITY;
    for (let a of A)
        max = Math.max(a, max);

    return max;
}

const max2 = A => A.reduce((max, n) => Math.max(max, n));




let arr = [4, ' ', 1, 8, 9, 1, 77, 4, 9, 1, 0, 0];

console.log(max2([]));