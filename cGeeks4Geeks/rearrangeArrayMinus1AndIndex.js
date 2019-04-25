function rearrange(arr) {
    //let max = arr.reduce((max, n) => max < n ? n : max);
    let newArr = [];
    //let newArr = Array.from(Array(max + 1).fill(-1));
    arr.forEach(n => newArr[n] = n);
    for (let i = 0; i <= newArr.length - 1; i++) {
        if (!newArr[i]) newArr[i] = -1;
    }
    return newArr;
}
let arr = [5, 6, 8, 9];
console.log(rearrange(arr))