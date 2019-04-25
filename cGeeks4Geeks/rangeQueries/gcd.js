function gcd(a, b) {
    if (a === 0) return b;
    if (b === 0) return a;
    if (a === b) return a; //or b as same

    return (a > b) ? gcd(a - b, b) : gcd(a, b - a);
}

function gcdArr(A) {
    let gc = A[0];
    let second = A[1];

    for (let a of A) {
        gc = gcd(gc, a);
    }

    return gc;

}


let a = 5, b = 5;
let A = [20, 10, 15]
//console.log(gcdArr(A));
//console.log((a * b) / gcd(a, b))

function gcd22(l, r) {
    return (r) ? gcd(r, l % r) : l;
}

console.log(gcd22(21, 45));