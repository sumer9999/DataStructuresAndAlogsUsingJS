function solution(A) {
    let obj = {}, len = A.length;
    for (let [i, n] of A.entries()) {
        if (obj[n]) obj[n].push(i)
        else obj[n] = [i];
        //obj[n] = obj[n] ? [...obj[n],i] : [i];
    }

    for (let [n, nArr] of Object.entries(obj)) {
        if (nArr.length > parseInt(len / 2)) return nArr[0]
    }
    return -1
}

function solution2(A) {  // This solution doesn't creates array for each char, but uses findIndex to get first occurance and return it
    let obj = {}; let halfLen = parseInt(A.length / 2);
    for (let a of A) obj[a] = ++obj[a] || 1;

    for (key in obj) {
        if (obj[key] > halfLen) return A.findIndex(e => e === parseInt(key));

    }
    return -1;
}