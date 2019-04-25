function smallest(A = []) {
    A = removeNegs(A);
    for (let a of A) {
        let otherIndex = Math.abs(a) - 1;
        if (A[otherIndex] && A[otherIndex] > 0) {
            A[otherIndex] *= -1;
        }
    }
    let missing = 1 + A.findIndex(e => e > 0);
    return missing;
}

function removeNegs(A) {
    let back = 0,
        front = 0;
    while (front < A.length) {
        if (A[front] <= 0) {
            [A[front], A[back]] = [A[back], A[front]];
            back++;
        }
        front++;
    }
    return A.slice(back);
}

let A = [-1, 6, 5, -6, -99, 2, -56, 1, 4];
A = [1, 4, 19, 3, 1, 2, 6];
console.log(smallest(A))