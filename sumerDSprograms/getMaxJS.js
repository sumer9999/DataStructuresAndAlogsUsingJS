let numbers = [333, 67, 4, 89, 3, 45, 1, 2, 2, 2, 1, 7, 333];

function getMax(numbers) {
  if (numbers.length < 1) {
    console.error("Invalid Aray Supplied");
  }

  //   let max = numbers[0];
  //   for (number of numbers) {
  //     if (number > max) max = number;
  //   }
  return numbers.reduce((a, e) => (a < e ? e : a));

  //   return max;
}

console.log(getMax(numbers));
