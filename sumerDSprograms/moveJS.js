numbers = [333, 67, 4, 89, 3, 45, 1, 2, 2, 2, 1, 7];

function move(numbers, position, offset) {
  let newPosition = position + offset;
  if (newPosition < 0 || newPosition >= numbers.length) {
    console.error("Invalid Inout Provided");
    return;
  }
  let element = numbers.splice(position, 1)[0];
  numbers.splice(newPosition, 0, element);
}

move(numbers, 1, 7);

console.log(numbers);
