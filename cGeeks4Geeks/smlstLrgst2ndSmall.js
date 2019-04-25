function smallLarge(arr) {
    arr = arr.sort((a, b) => a - b);
    console.log(arr);
    for (let i = 1; i < arr.length; i += 2) {
        let ele = arr.pop();
        arr.splice(i, 0, ele);
    }
    console.log(arr);
}


let arr = [4, 6, 2, 8, 1, 9, 3, 5, 7, 10];
console.log(smallLarge(arr)); 