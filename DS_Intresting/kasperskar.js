function numAsc(num) {
    num = parseInt(num.toString().split('').sort((a, b) => a - b).join(''));
    if (num < 1000) {
        num = num * 10;
    }
    return num;
}
function numDes(num) {
    return parseInt(num.toString().split('').sort((a, b) => b - a).join(''));
}

function KaprekarsConstant(num) {
    let prev = 0, count = 0;

    while (prev !== num) {
        console.log("================");
        console.log(count, prev, num, numDes(num), numAsc(num));
        prev = num;
        num = numDes(num) - numAsc(num);
        count = count + 1;
        console.log(count, prev, num, numDes(num), numAsc(num));
    }
    return count;
}

console.log(KaprekarsConstant(3524));