function solution(A) {
    let count = 0;
    if (A.length < 3) return 0;
    A.sort((a, b) => a - b);
    for (let start = 0; start < A.length - 2; start++) {
        let mid = start + 1, end = start + 2;
        while (end < A.length) {
            if (A[start] + A[mid] > A[end]) {
                count += end - mid;
                end++;
            } else if (mid < end - 1) {
                mid++;
            } else {
                end++;
                mid++;
            }
        }
    }
    return count;
}


function solution(A) { //working but INefficient
    let count = 0;
    if (A.length < 3) return 0;
    A.sort((a, b) => a - b);
    for (let start = 0; start < A.length - 2; start++) {
        for (let mid = start + 1; mid < A.length - 1; mid++) {
            end = mid + 1;
            while (end < A.length && A[start] + A[mid] > A[end]) end++;
            count += end - mid - 1;
        }
    }
    return count;
}

