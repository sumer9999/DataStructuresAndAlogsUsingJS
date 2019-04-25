//const { pyramid } = require("./recursivePyramid");

let n = 6;
for (let i = 1; i <= n; i++) {
  let str = "";
  for (let j = 1; j < 2 * n; j++) {
    str += j < n - i + 1 || j > n + i - 1 ? "." : "#";
  }
  //console.log(str);
}

function pyramid(n, i = 1) {
  if (i > n) return;
  console.log(".".repeat(n - i) + "#".repeat(2 * i - 1) + ".".repeat(n - i));
  pyramid(n, i + 1);
}

pyramid(50);
