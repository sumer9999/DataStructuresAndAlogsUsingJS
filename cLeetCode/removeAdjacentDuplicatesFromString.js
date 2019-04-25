function solution(S) {
    let A = [...S];

    for (let i = 0; i <= A.length - 2; i++) {
        let j = i;
        while (A[j] === A[j + 1]) {
            j++;
        }
        if (i !== j) {
            A.splice(i, j - i + 1);
            i--;
        }
    }
    return A.toString();
}

console.log(solution('acaaabbbacdddd'));