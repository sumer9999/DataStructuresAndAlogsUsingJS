function nonRepeat(S) {   //EXCELLENT SOLUTION WITH TWO LOOPS
    let sObj = [...S].reduce((sObj, c) => {
        sObj[c] = ++sObj[c] || 1;
        return sObj;
    }, {});

    for (let c of [...S]) {
        if (sObj[c] === 1) return c;
    }
}
console.log(nonRepeat('GeeksForGeeks'))

const nonRepeat2 = S => [...S].reduce((a, c) => {
    let index = a.indexOf(c);
    return (index > -1) ? [...a.slice(0, index), ...a.slice(index + 1)] : [...a, c];
}, [])[0];

console.log(nonRepeat2('GeeksFoorrGeeksF'));


//BOTH THE BELOW FUNCTIONS ARE CONFUSING AND I DONT KNOW WHY AND HOW I WROTE IT -=-=-=-=-=-=
function nonRepeated(str) {
    let o = {};
    [...str.toLowerCase()].forEach((c, i) => (o[c] || o[c] === 0)
        ? o[c] = Math.abs(o[c]) * -1 : o[c] = i + 1);
    let minKey, minIndex = Number.POSITIVE_INFINITY;
    for (let [key, indexVal] of Object.entries(o)) {
        if (indexVal > 0) {
            if (indexVal < minIndex) {
                minIndex = indexVal;
                minKey = key;
            }
        }
    }
    return [minKey, minIndex - 1];  //subtracting 1 for 0 based index
}


str = 'abcabbbbbbbbbcd'//'Somewhere beyond the sea, somewhere waiting for me';
arr = [1, 2, 3, 4, 5, 1, 6];
console.log(nonRepeated1(arr));

function nonRepeated1(arr) {
    let o = {};
    arr.forEach((c, i) => (o[c] || o[c] === 0)
        ? o[c] = Math.abs(o[c]) * -1 : o[c] = i + 1);
    let minKey, minIndex = Number.POSITIVE_INFINITY;
    for (let [key, indexVal] of Object.entries(o)) {
        if (indexVal > 0) {
            if (indexVal < minIndex) {
                minIndex = indexVal;
                minKey = key;
            }
        }
    }
    return [minKey, minIndex - 1];
}