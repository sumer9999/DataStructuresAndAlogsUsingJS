console.log(solution('aaaa', 1));

function solution(S, K) {
    let sObj = {}, pObj = {};
    for (let c of [...S]) {
        sObj[c] = (sObj[c] || 0) + 1;

    }

    for (let key in sObj) {  //Adding Proximaity Value
        let reg1 = new RegExp(key + key);
        let reg2 = new RegExp(key + '\\w' + key)
        if (S.match(reg1)) {
            pObj[key] = (pObj[key] || 0) + 2;
        }
        if (S.match(reg2)) {
            pObj[key] = (pObj[key] || 0) + 1;
        }
    }

    let totalKeys = Object.keys(sObj).length;

    let minKeys = [], minKey, previousValue;

    do {
        previousValue = sObj[minKey];
        minKey = Object.keys(sObj).reduce((ac, k, i) => !i || (!minKeys.includes(k) && +sObj[k] < +sObj[ac]) ? k : ac, undefined);

        minKeys.push(minKey);
    } while (minKeys.length < totalKeys - K || previousValue !== sObj[minKey]);

    for (let key in sObj) {

        if (minKeys.includes(key)) sObj[key] = (sObj[key] || 0) - (pObj[key] || 0);
        else sObj[key] = (sObj[key] || 0) + (pObj[key] || 0);
    }

}

minKeys = [];
do {
    minKey = Object.keys(sObj).reduce((ac, k, i) => !i || (!minKeys.includes(k) && +sObj[k] < +sObj[ac]) ? k : ac, undefined);
    minKeys.push(minKey);
} while (minKeys.length < totalKeys - K);

let minIndex = S.length - 1, maxIndex = 0;
for (let c of minKeys) {
    minIndex = Math.min(minIndex, S.indexOf(c));
    maxIndex = Math.max(maxIndex, S.lastIndexOf(c));
    //console.log(c, minIndex, maxIndex);
}

return S.slice(minIndex, maxIndex + 1).length;
