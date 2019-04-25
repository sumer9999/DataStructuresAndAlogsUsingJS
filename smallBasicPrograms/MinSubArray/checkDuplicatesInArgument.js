function areThereDuplicates(...A) {
    A = A.sort();
    for (let i = 0; i <= A.length - 2; i++) {
        if (A[i] === A[i + 1]) {
            return true;
        }
    }
    return false;
}

console.log(areThereDuplicates('a', 'b', 'c', 'f'));