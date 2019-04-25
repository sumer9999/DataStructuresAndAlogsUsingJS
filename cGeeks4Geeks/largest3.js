function largest3(A) {
    let first = A[0], second = A[0], third = A[0];
    for (let n of A) {
        if (n > first) {
            third = second;
            second = first;
            first = n;
        } else if (n > second) {
            third = second;
            second = n;
        } else if (n > third) {
            third = n;
        }
    }
    return [first, second, third];
}

let arr = [4, 3, 7, 9, 2, 5, 7, 8, 9, 2, 4, 77, 23, 10];
console.log(largest3(arr));