let sum1 = function (a) {
    return function (b) {
        return (b ? sum(a + b) : a);
    }
};

// const sum2 = a => b => b ? sum(a + b) : a;

// console.log(">", sum2(1)(2)(3)(4)());



// const partial = (...xs) => (...ys) => [...xs, ...ys].reduce((a, b) => a + b)
// console.log(partial(1)(2, 3, 4) // 10
//     , partial(1, 2)(3, 4) // 10
//     , partial(1, 2, 3)(4))


// let arr = [];
// function sum(...args) {
//     arr.push(...args);
//     if (arr.length === 4) return arr.reduce((acc, e) => acc + e);
//     return sum;
// }
// console.log(sum(1)(2)(3, 4));

function sum(...args) {
    if (args.length === 4) return args.reduce((acc, e) => acc + e);
    return sum.bind(null, ...args);
}
console.log(sum(1)(2)(3, 4));




//sum(1, 2, 3, 4);
// sum(1, 2)(3, 4);
// sum(1, 2)(3)(4);
// sum(1, 2, 3)(4);
// sum(1)(2, 3, 4);


// function sum(...args1) {
//     if (args1.length > 1) return args1.reduce((acc, e) => acc += e, 0);
//     return function (arg2) {
//         return args1[0] + arg2;
//     }
// }
// console.log(sum(1)(5));
