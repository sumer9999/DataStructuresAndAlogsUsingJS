function steps(n, row = 1, str = "") {
  if (n < row) return;

  if (str.length === n) {
    console.log(str);
    return steps(n, row + 1);
  }

  str += str.length < row ? "#" : ".";
  steps(n, row, str);
}

steps(9);
