function sum(...args) {
    let totalArgs = 3;
    let sum = args.reduce((a, n) => a + n);
    if (args.length < totalArgs) {
        return function (...args2) {
            sum += args2.reduce((a, n) => a + n);
            return ((args.length + args2.length) < totalArgs)
                ? (...args3) => sum + args3.reduce((a, n) => a + n) : sum;
        }
    }
    return sum;
}

console.log(sum(1, 2)(3));
