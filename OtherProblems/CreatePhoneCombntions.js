let phone = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
};


function createCombinations1(num) {
    let combinations = [...num.toString()].map(n => parseInt(n))
        .reduce((combi, n) => {
            let newCombi = [];
            combi.forEach(combiEle => [...phone[n]].forEach(arrEle => newCombi.push(combiEle + arrEle)));
            return newCombi;
        }, ['']);
    return combinations;
}
//console.log(createCombinations1(234));

function createCombinations(num) {
    let array = [...num.toString()].reduce((acc, i) => [...acc, [...phone[i]]], []);
    console.log(array);
    return array.slice(1).reduce((combi, arr, i) => {
        combi.forEach(combiEle => {
            [...arr].forEach(arrEle => combi.push(combiEle + arrEle));
        });
        return combi.filter(ele => ele.length > i + 1);
    }, array[0].slice());
}
//console.log(createCombinations(234));


//Below is another program to count occurance of num in string
function findCount(rangeNum, numToFind) {
    return [...Array(rangeNum).keys()].slice(1).reduce((c, num) =>
        c + [...num.toString()].reduce((count, n) => +n === numToFind ? ++count : count, 0), 0)
}

console.log(findCount2(1000, 9));

function findCount2(rangeNum, num) {
    num = num.toString(),
        total = 0;
    for (let i = 1; i <= 1000; i++) {
        total += i.toString().split(num).length - 1
    }
    return total;
}