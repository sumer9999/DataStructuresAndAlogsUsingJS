function kSmallestPair(A1, A2, k) {
    let len1 = A1.length, len2 = A2.length;//if (k > len1 * len2) return;
    let arr1Index2 = Array(len1).fill(0);
    let output = [];
    let sum, minSum, minI1, i1;
    while (k-- > 0) {
        minSum = Number.POSITIVE_INFINITY;//minI1 = 0;
        for (i1 = 0; i1 < len1; i1++) {
            sum = A1[i1] + A2[arr1Index2[i1]];

            if (sum < minSum && arr1Index2[i1] < len2) {  //
                minI1 = i1;
                minSum = sum;
            }
        }//console.log(A1[minI1], A2[arr1Index2[minI1]]);
        output.push([A1[minI1], A2[arr1Index2[minI1]]]);
        arr1Index2[minI1]++;
    }
    return output;
}

let arr1 = [1, 5, 11], arr2 = [2, 4, 7], k = 5;
console.log(kSmallestPair(arr1, arr2, k));