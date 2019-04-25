function freq(N1, N2) {
    obj1 = createObject(N1);
    obj2 = createObject(N2);

    return compareObjects(obj1, obj2);
}

console.log(freq(35664, 36456))

function createObject(N, obj = {}) {
    do {
        let mod = N % 10;
        N = parseInt(N / 10);
        obj[mod] = ++obj[mod] || 1;
    } while (N);
    return obj;
}

function compareObjects22(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    for (let [key, value] of Object.entries(obj1)) {
        if (!obj2[key] || value != obj2[key]) return false;
    }
    for (let [key, value] of Object.entries(obj2)) {
        if (!obj1[key] || value != obj1[key]) return false;
    }
    return true;
}

function compareObjects(obj1, obj2) {
    for (let key of Object.keys(obj1)) {
        obj2[key] = (obj2[key] || 0) - obj1[key];
    }
    return Object.values(obj2).filter(e => e !== 0).length === 0;
}