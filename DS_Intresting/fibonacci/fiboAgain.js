
// function fib1(n, a = 0, b = 1) { //Recursive Solution
//   if (a + b < n) {
//     [a, b] = [b, a + b];
//     console.log(b);
//     fib1(n, a, b)
//   }
// }

// console.log(fib1(40));


let a = 0, b = 1;
while (a + b < 100) { //Fibo upto 100
  console.log(b);
  [a, b] = [b, a + b];
}



// function* fiboGood(n) {
//   yield 0;
//   for (let a = 0, b = 1; a + b < n; [a, b] = [b, a + b])
//     yield (b);
// }
// fibogen = fiboGood(Number.POSITIVE_INFINITY);

// for (let i = 0; i <= 100; i++) {
//   console.log(fibogen.next().value);
// }
//Above function and code is for Fibo as Generator.

function fibonacci(limit) {
  let arr = [0];
  for (let s = 0, b = 1, n = 0; b <= limit; n = b + s, [s, b] = [b, n]) console.log(b)
  //arr.push(b);

  //return arr;
}

//console.log(fib(0, 1, 100));

function fib(s, b, limit, arr = []) {
  if (s === 0) arr.push(s);
  if (b < limit) {
    arr.push(b);
    fib(b, s + b, limit, arr);
  }
  return arr;
}