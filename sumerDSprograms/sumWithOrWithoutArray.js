numbers = [4, 67, 4, 89, 3, 45, 1, 2, 2, 2, 1, 7];

function sum(first, ...restArray) {
  if (!Array.isArray(first)) {
    first = [first, ...restArray];
  }
  return first.reduce((a, c) => a + c);
}

console.log(sum(1, 2, 3));
