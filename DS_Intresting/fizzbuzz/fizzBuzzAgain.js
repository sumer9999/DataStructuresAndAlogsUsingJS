function fizzBuzz(input) {
  if (!Number.isInteger(input)) return "Input not a valid integer";

  if (input % 15) return "fizzbuzz";

  if (input % 3 === 0) return "fizz";

  if (input % 5 === 0) return "buzz";

  return input;
}

console.log(fizzBuzz(4));
