function minSubArrayLen(A, n) {  //Need to find min no of elements having sum greater then the num
    let windowSum = A[0], min = A.length + 1;
    let back = 0, front = 0;
    while (front < A.length) {
        if (windowSum < n || back === front) {
            if (windowSum > n) min = 1;
            front++;
            windowSum += A[front];
        } else //if (windowSum >= n) 
        {
            min = Math.min(min, front - back + 1);
            windowSum -= A[back];
            back++;
        }
    }
    return (min === A.length + 1) ? 0 : min;
}
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));