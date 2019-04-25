// Array.prototype.map1 = function (fn) {     //This is also workig fine but I am checking
//     return this.reduce1((arr, ele, i) => {
//         return [...arr, fn(ele, i, this)]
//     }, []);
// }
Array.prototype.map1 = function (fn) {
    return this.reduce((arr, ele, i) => [...arr, fn(ele, i, this)], []);
}

Array.prototype.filter1 = function (fn, context) {
    return this.reduce1((arr, ele, i) => {
        if (fn.call(context, ele, i, this)) arr = [...arr, ele]
        return arr;
    }, []);

}

Array.prototype.reduce1 = function (fn, acc) {
    let startIndex = 0;
    if (acc === undefined) {
        startIndex = 1;
        acc = this[0];
    }
    for (let i = startIndex; i <= this.length - 1; i++) {
        acc = fn.call(null, acc, this[i], i, this)
    }

    return acc;
}

Array.prototype.every1 = function (fn, context) {
    for (let i = 0; i <= this.length - 1; i++) {
        if (!(fn.call(context, this[i], i, this)))
            return false;

    }
    return true;
}




let array = [1, 2, 3];
console.log(array.map1(e => e * e))
console.log(array.filter1(e => e > 2))
let sum = array.reduce1((acc, ele) => {
    acc = acc + ele;
    return acc;
});
console.log(sum);