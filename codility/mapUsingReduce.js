function mapUsingR(arr) {
    return arr.reduce((a, n) => [...a, n * n], []);
    //return arr.map(a => a * a);

}

console.log(mapUsingR([1, 2, 3, 4]))