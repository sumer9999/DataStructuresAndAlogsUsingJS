function pyramid(n, row = 1, str = "") {
  if (n < row) return;

  if (str.length === 2 * n - 1) {
    console.log(str);
    return pyramid(n, row + 1);
  }

  str += str.length < n - row || str.length > n + row - 2 ? "." : "#";

  pyramid(n, row, str);
}

pyramid(4);

module.exports = { pyramid };
