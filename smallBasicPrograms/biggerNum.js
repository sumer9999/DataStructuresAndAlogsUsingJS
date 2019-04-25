function bigger(n1, n2) {
    return n1 > n2 ? n1 : (n1 === n2 ? "Equal" : n2)
}

// console.log(bigger(5, 5));


const isLandscape = (w, h) => w > h;

// console.log(isLandscape(10, 40));

function fizzBuzz(n) {
    if (typeof n !== 'number' || n < 1 || isNaN(n)) return 'Not a Number';
    let fizz = n % 3 === 0;
    let buzz = n % 5 === 0;

    if (fizz && buzz) return 'fizzbuzz';
    if (fizz) return 'fizz';
    if (buzz) return 'buzz';

    return n;
}
// console.log(fizzBuzz(NaN))

function showStar(n) {

    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(i));
    }

}

//showStar(5)


//Object.fromEntries(Object.entries())
let obj = {
    name: "Sumer",
    location: { x: 5, y: 10, girth: { g: 6 } },
    sirname: "Singh"
}

const cloneObj = (obj = {}) => ({ ...obj })

let newObj = cloneObj(obj);

console.log(newObj);
console.log(newObj.location === obj.location)