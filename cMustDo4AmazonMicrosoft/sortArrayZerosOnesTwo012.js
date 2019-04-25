function solution(A) {
    let zero = 0,
        one = 0,
        two = A.length - 1;

    while (one <= two) {
        if (A[one] === 0) {
            [A[zero], A[one]] = [A[one], A[zero]];
            zero++;
        } else if (A[one] === 2) {
            [A[two], A[one]] = [A[one], A[two]];
            two--;
            one--;
        }
        one++;
    }
    return A;
}

console.log(solution([2, 2, 2, 0, 2, 1, 2, 0, 1, 0, 0, 1]));

