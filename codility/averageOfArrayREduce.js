function average(arr) {
    return arr.reduce((t, n, i, a) =>
        i < a.length - 1 ? t + n : (t + n) / (a.length));
}

console.log(average([1, 2, 3, 4, 5, 6]))