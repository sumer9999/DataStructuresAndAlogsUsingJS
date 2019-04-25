numbers = [4, 67, 4, 89, 3, 45, 1, 2, 2, 2, 1, 7];

function except1(numbers, excludeList) {
  let output = [];
  for (number of numbers)
    if (!excludeList.includes(number)) output.push(number);

  return output;
}

console.log(except1(numbers, [2, 1]));
