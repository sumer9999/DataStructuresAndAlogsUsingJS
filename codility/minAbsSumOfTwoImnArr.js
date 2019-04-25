function solution(A) {  //Better solution bit some test cases are still failing
    let i = 0, j = A.length - 1, minSum = Number.POSITIVE_INFINITY, sum;
    if (A.length === 1) return Math.abs(A[0] + A[0]);
    A.sort((a, b) => a - b);

    let negatives = A.filter(n => n < 0);
    let positives = A.filter(n => n >= 0);
    negatives.sort((a, b) => b - a);

    if (positives.length === 0) return Math.abs(2 * negatives[0]);
    if (negatives.length === 0) return 2 * positives[0];
    if (positives[0] === 0) return 0;

    while (i <= j) {
        sum = A[i] + A[j];
        minSum = Math.min(minSum, Math.abs(sum));

        if (sum < 0) i++;
        else if (sum > 0) j--;
        else return 0
    }
    return minSum;
}




function solution22(A) {   //Some test cases failing
    let i = 0, j = A.length - 1, minSum = 100, sum;
    if (A.length === 1) return Math.abs(A[0] + A[0]);
    //if(A.length === 2) return Math.abs(A[0] + A[1]);


    A.sort((a, b) => a - b);
    while (i <= j) {
        sum = A[i] + A[j]
        minSum = Math.min(minSum, Math.abs(sum));

        if (sum < 0) i++;
        else if (sum > 0) j--;
        //else return 0
    }
    return minSum;
}


