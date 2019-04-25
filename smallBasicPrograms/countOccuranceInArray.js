function countOccurance(A, n) {
    let count = 0;
    for (let num of A) {
        if (num === n) {
            count++;
        }
    }
    return count;
}


let countO = (A, num) => A.reduce((a, n) => a + (n === num ? 1 : 0), 0);

let arr = [1, 2, 3, 4, 1, 2, 6, 1, 3, 4, 8, 9, 1, 0];
console.log(countO(arr, 1));