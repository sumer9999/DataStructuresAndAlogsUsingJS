function averagePair(A, avg) {
    let back = 0, front = A.length - 1, calAvg;
    while (back < front) {
        calAvg = (A[back] + A[front]) / 2;
        if (calAvg === avg) return true;

        if ((A[back] + A[front]) / 2 > avg) front--;
        else back++;
    }
    return false;
}

averagePair([1, 2, 3], 2.5) //should return true