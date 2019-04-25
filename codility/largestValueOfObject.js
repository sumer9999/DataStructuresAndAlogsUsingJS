let obj = { "1632": 45, "1856": 12, "1848": 56, "1548": 34, "1843": 88, "1451": 55, "4518": 98, "1818": 23, "3458": 45, "1332": 634, "4434": 33 };

n = 3;

const smallestkeys = (obj, n = 1) =>
    Object.keys(obj).reduce((keyArr, k, i) =>
        (!i || obj[k] < obj[keyArr[keyArr.length - 1]])
            ? [k, ...keyArr].slice(0, n).sort((a, b) => obj[a] - obj[b])
            : keyArr
        , []);

n = 3;
const smallestNKeys = Object.keys(obj)
    .sort((a, b) => a[1] - b[1])
    .slice(0, n)
    .map(a => a[0])

console.log(smallestNKeys);