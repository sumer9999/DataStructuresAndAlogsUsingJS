function rangeQuery(n, Q) {
    A = Array(n).fill(0);

    for (let q of Q) {
        if (q[0] === 1) {
            type1(q[1], q[2]);
        }
        if (q[0] === 2) {
            type2(q[1], q[2]);
        }

    }
    console.log(A);

    function type1(start, end) {
        for (let i = start - 1; i < end; i++)
            A[i]++;
    }

    function type2(start, end) {
        for (let i = start; i <= end; i++) {
            if (Q[i - 1][0] === 1) type1(Q[i - 1][1], Q[i - 1][2]);
            if (Q[i - 1][0] === 2) type2(Q[i - 1][1], Q[i - 1][2]);
        }
    }
}
queries = [[1, 1, 2], [1, 4, 5], [2, 1, 2], [2, 1, 3], [2, 3, 4]];
console.log(rangeQuery(5, queries));