function randomize(A) {
    let upper, lower, num, len = A.length;
    const rand = (upper, lower) => lower + Math.floor((upper - lower + 1) * Math.random());

    for (let i = 0; i <= len - 2; i++) {
        num = rand(i + 1, len - 1);
        [A[i], A[num]] = [A[num], A[i]];
    }

    return A;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(randomize(arr));