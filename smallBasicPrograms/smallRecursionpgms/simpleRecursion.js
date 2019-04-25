function count(n) {
    console.log(n);
    if (n <= 1) {
        return;
    }
    else {
        count(n - 1);
    }
    console.log(n);
}
//count(5);

const fact = n => (n === 2) ? 2 : n * fact(n - 1);

//console.log(fact(5));

const range = (n, A = []) => (n === 1) ? [n, ...A] : range(n - 1, [n, ...A]);
//console.log(range(5));

const sum = n => n == 1 ? 1 : n + sum(n - 1);
//console.log(sum(5))

function fib(n, first = 1, second = 1) {
    if (n <= 2) return 1;
    [first, second] = [second, first + second];
    return (n - 2 === 1) ? second : fib(n - 1, first, second);
}

//console.log(fib(2));

function reverseStr2(S, S2 = '') {
    return (S.length === 0) ? S2 : reverseStr(S.slice(1), S.slice(0, 1) + S2);
}
function reverseStr(S) {
    return (S.length <= 1) ? S : reverseStr(S.slice(1)) + S.slice(0, 1);
}
//console.log(reverseStr('awesome'))

function isPalindrome(S, i = 0) {
    if (i > parseInt(S.length / 2)) return true;
    if (S[i] !== S[S.length - 1 - i]) return false;
    return isPalindrome(S, i + 1);
}
//console.log(isPalindrome('ef'));

function flatten(A, arr = []) {
    (function inner(A) {
        for (let a of A) {
            (Array.isArray(a)) ? inner(a) : arr.push(a);
        }
    })(A)
    return arr;
}

//console.log(flatten([1, [2], [3, [[4]]]]));

function capitalizeFirst(A, n = A.length - 1) {
    A[n] = A[n].slice(0, 1).toUpperCase() + A[n].slice(1);
    return (n === 0) ? A : capitalizeFirst(A, n - 1);
}

//console.log(capitalizeFirst(['my', 'name', 'sumer']));  

function nestedEvenSum(obj) {
    let total = 0;
    (function inner(obj) {
        for (let [key, val] of Object.entries(obj)) {
            //console.log(key, val);
            if (typeof val === 'object') inner(val);
            if (val % 2 === 0) total += val;
        }
    })(obj);
    return total;
}

var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}
var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { bb: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};
//console.log(nestedEvenSum(obj2));  


let obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

function collectStrings(obj, A = []) {
    for (let val of Object.values(obj)) {
        if (typeof val === 'object') A.push(...collectStrings(val));
        if (typeof val === 'string') A.push(val);
    }
    return A;
}
collectStrings(obj) // ["foo", "bar", "baz"])
console.log(collectStrings(obj));