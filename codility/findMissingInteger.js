function findMissingInteger(arr) {
    let len = arr.length, newArr = [], num1, num2;
    expected = (len + 2) * (len + 3) / 2
    actual = arr.reduce((a, n) => a + n);
    let sum = expected - actual;
    for (let n of arr) newArr[n - 1] = true;

    for (let [i, n] of newArr.entries()) {
        if (!newArr[i])
            num1 = i + 1;
    }
    if (!num1) num1 = len + 1;
    console.log(num1, sum - num1, sum);
}
findMissingInteger2([1, 2, 4, 6]);

function findMissingInteger2(arr) {  //Better Algorithm
    let len = arr.length, newArr = [], num1, num2;
    expected = (len + 2) * (len + 3) / 2
    actual = arr.reduce((a, n) => a + n);
    let sum = expected - actual;
    console.log(sum);
    index = parseInt(sum / 2) - 1;
    expected = (index + 1) * (index + 2) / 2
    actual = arr.slice(0, index).reduce((a, n) => a + n);

    num1 = expected - actual;
    console.log(expected - actual, sum + actual - expected);

}

function solution(A) {
    let N = A.length + 1,
        total = (N * (N + 1)) / 2,
        totalOfEle,
        missingNum;

    if (N === 1) return 1;

    totalOfEle = A.reduce((a, e) => a + e);
    missingNum = total - totalOfEle;

    return missingNum
}