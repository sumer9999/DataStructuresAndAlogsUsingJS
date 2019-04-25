obj = { a: 1, b: 2, c: "Three", d: 4 };

Object.entries(obj).forEach(([key, value]) => {
  //console.log(key, value);
});

// wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// wait(2000).then(ms => console.log("After the timeout ", ms));

// arr = [9, 7, 5, 3, 1];

// (...arr) => x => console.log(x);

// arr.forEach(x => console.log(x));

let number = 10;

function increase(number) {
  number++;
}

increase(number);

console.log(number);
