function solution(A, aObj = {}) {

    for (let a of A) aObj[a] = ++aObj[a] || 1;

    let outArr = Object.keys(aObj).sort((a, b) => aObj[b] - aObj[a])
        .reduce((arr, key) => [...arr, ...Array(aObj[key]).fill(key)], []);
    return outArr;
}

console.log(solution([1, 2, 5, 2, 8, 5, 6, 8, 6, 8]));