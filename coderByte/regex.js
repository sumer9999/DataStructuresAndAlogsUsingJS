str = "(1 1)(3 3)";

const fact = num => num === 1 ? 1 : fact(num - 1)
let regex = /\((\d+) (\d+)\)\((\d+) (\d+)\)/;
let retValue = regex.exec(str);

console.log(retValue);

if (retValue) {
    [, x, y, a, b] = retValue;
    return fact(a - x + b - y) / (fact(a - x) * fact(b - y));
}
//return null;

