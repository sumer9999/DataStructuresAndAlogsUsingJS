function mSort(A) {
    if (A.length === 1) return A;
    const mid = parseInt(A.length / 2);
    return merge(mSort(A.slice(0, mid)), mSort(A.slice(mid)));

}
function merge(lArr, rArr) {
    let lIndex = 0, rIndex = 0;
    let result = [];
    while (lIndex < lArr.length && rIndex < rArr.length) {
        result.push(lArr[lIndex] < rArr[rIndex] ? lArr[lIndex++] : rArr[rIndex++])
    }
    return [...result, ...lArr.slice(lIndex), ...rArr.slice(rIndex)];
}

console.log(mSort([7, 1, 99, 4, 7, 2, 4, 7, 121, 5]));