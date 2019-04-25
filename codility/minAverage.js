function solution(A) {
    let back = 0, front = 1;
    let sum = (A[back] + A[front]),
        avg = sum / 2,
        minAvg = Number.POSITIVE_INFINITY,
        start = back;

    while (front < A.length - 1) {
        front++;
        sum += A[front];
        avg = sum / (1 + front - back);
        if (avg < minAvg) {
            minAvg = avg;
            start = back;
        }

        sum -= A[back];
        back++;
        avg = sum / (1 + front - back);
        if (avg < minAvg) {
            minAvg = avg;
            start = back;
        }
    }

    return start;
}

solution([4, 2, 2, 5, 1, 5, 8])



function solution222(A) {
    var start = 0;
    var currentSum = A[0] + A[1];
    var minAvgSlice = currentSum / 2;
    for (var i = 2; i < A.length; i++) {
        currentSum += A[i];
        var newAvg = currentSum / 3;
        if (newAvg < minAvgSlice) {
            minAvgSlice = newAvg;
            start = i - 2;
        }

        currentSum -= A[i - 2];
        newAvg = currentSum / 2;
        if (newAvg < minAvgSlice) {
            minAvgSlice = newAvg;
            start = i - 1;
        }
    }

    return start;
}
