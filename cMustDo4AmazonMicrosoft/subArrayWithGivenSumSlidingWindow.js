function solution(A, K) {
    let back = 0, front = 0;
    sum = A[front];
    while (front < A.length) {
        if (sum === K) return [back, front]

        if (sum < K) {
            front++;
            sum += A[front];
        } else {
            sum -= A[back];
            back++;
        }
    }
    return -1;
}


console.log(solution([1, 2, 3, 7, 5], 12));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15));
