let numbers = [333, 67, 4, 89, 3, 45, 1, 2, 2, 2, 1, 7];

function countOccurance(numbers, searchElement) {
  return numbers.reduce(
    (accumulator, ele) => accumulator + (searchElement === ele ? 1 : 0),
    0
  );
}

console.log(countOccurance(numbers, 2));
