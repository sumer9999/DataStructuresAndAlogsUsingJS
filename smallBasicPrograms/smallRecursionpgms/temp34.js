function outer(n, A = []) {
    (function inner(n2) {
        A.unshift(n2);
        return n2 == 1 ? 1 : n2 + inner(n2 - 1);
    })(n)
    return A;
}

console.log(outer(5));