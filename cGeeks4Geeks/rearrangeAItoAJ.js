function rearrange22(A) {  //plan witn T-On and S-On
    let B = [];
    for (let [i, a] of A.entries()) {
        B[a] = i;
    }
    return B;
}

function rearrange(A) {
    let [val, i] = [A[0], 0];

    while (val !== 0) {
        ti = i;
        tval = val;

        i = val;
        val = A[i];
        A[i] = ti;
    }
    A[0] = tval;
    return A
}

let arr = [1, 3, 0, 2];
console.log(rearrange(arr));