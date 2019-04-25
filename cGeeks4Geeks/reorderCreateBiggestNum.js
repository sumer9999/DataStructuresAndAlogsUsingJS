function biggest(A) {
    let numStr = A.sort(((x, y) => +("" + y + x) - +("" + x + y))).join('');
    return numStr;
}
let arr = [1, 34, 3, 98, 9, 76, 45, 4];
console.log(biggest(arr));