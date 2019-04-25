function sum(...args) {
    if (args.length === 4) return args.reduce((acc, e) => acc += e, 0);
    return sum.bind(null, ...args);
}
console.log(sum(1)(2)(3, 4));