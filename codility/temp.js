function solution1(S, K) {
    let sms = 0, sArr = [];
    let arr = S.split(' ');
    if (arr.some(w => w.length > K)) return -1;
    while (arr.length > 0) {
        word = arr.shift();
        if ([...sArr, word].join(' ').length > K) {
            sArr = [word];
            sms++;
        } else {
            sArr = [...sArr, word];
        }
    }
    if (sArr.join('').trim().length) sms++;
    return sms;
}

console.log(solution('SMS messages are really short is', 12))
function solution(S, K) {
    let count = 0, sms = 0, sIndex;

    if (S.split(' ').some(w => w.length > K)) return -1;

    for (let i = 0; i <= S.length - 1; i++) { //console.log(i, S.charAt(i));
        if (S.charAt(i) === ' ') {
            sIndex = i;
        }

        count++;
        if (count === 12) {
            sms++;
            count = 0;
            if (S.charAt(i + 1) === ' ') {  //Add coditional check for last charcter
                i++;
                sIndex = i;
            }
            else {
                i = sIndex;
            }
        }
    }
    if (count) sms++;
    return sms;
}

// const data = [
//     { a: 'happy', b: 'robin', c: ['blue', 'green'] },
//     { a: 'tired', b: 'panther', c: ['green', 'black', 'orange', 'blue'] },
//     { a: 'sad', b: 'goldfish', c: ['green', 'red'] }
// ];


// let newArr = data.reduce((a, obj) => [...a, ...obj.c], [])
// // set = new Set();
// // data.forEach(obj => set.add(...obj.c));

// console.log([...new Set(newArr)]);

// Array.prototype.map1 = function (fn) {
//     let mapped = [];
//     for (let i = 0; i <= this.length - 1; i++) {
//         mapped = [...mapped, fn(this[i], i, this)];
//     }
//     return mapped;
// }


// Array.prototype.filter1 = function (fn) {
//     let filtered = [];
//     for (let i = 0; i <= this.length - 1; i++) {
//         if (fn(this[i])) {
//             filtered.push(this[i]);
//         }
//     }
//     return filtered;
// }

// Array.prototype.forEach1 = function (fn) {
//     for (let i = 0; i <= this.length - 1; i++) {
//         fn(this[i], i, this);
//     }
// }

// Array.prototype.reduce1 = function (fn,initVal) {
//     if(!initVal) initVal = this.shift();
//     let acc = 1;
//     for(let i=0;i<=this.length-1;i++){
//         fn(acc)
//     }


// }

// array.reduce((acc,n,i)=> acc + n ,0)

// console.log([1, 2, 3, 4].forEach1((e, i) => console.log(e, i))); //e => e * e


