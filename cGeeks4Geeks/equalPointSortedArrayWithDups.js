function equalPoint(arr) {
    let arr2 = Array.from(new Set(arr));
    return arr2.length % 2 === 0 ? -1 : arr2[parseInt(arr2.length / 2)]
}


arr = [1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5];

console.log(equalPoint(arr));


