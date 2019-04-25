function rotate(arr, n = 1) {
    let len = arr.length, nAbs = Math.abs(n);
    nAbs = nAbs % len;
    n = n % len;
    return (n < 0) ? [...arr.slice(nAbs), ...arr.slice(0, nAbs)]
        : [...arr.slice(len - n), ...arr.slice(0, len - n)];
}


let arr = [1, 2, 3, 4, 5,];
console.log(rotate(arr, -1));