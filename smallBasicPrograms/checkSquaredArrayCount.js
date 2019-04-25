function checkSquared(A, B) {
    let aObj = {}, bObj = {};
    if (A.length !== B.length) return false;
    for (let a of A) {
        aObj[a] = (aObj[a] || 1) + 1;
    }

    for (let b of B) {
        bObj[b] = (bObj[b] || 1) + 1;
    }

    if (Object.keys(aObj).length !== Object.keys(bObj).length) return false;

    for (let key in aObj) {
        if (bObj[key * key] !== aObj[key]) return false;
    }

    for (let key in bObj) {
        if (bObj[key] !== aObj[Math.sqrt(key)]) return false;
    }

    return true;
}

let A = [1, 3, 2, 6, 3];
let B = [9, 4, 1, 36];

console.log(checkSquared(A, B));