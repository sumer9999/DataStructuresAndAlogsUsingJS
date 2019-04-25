console.log(fizzbuzz(16.2));

function fizzbuzz(number) {
  if (!Number.isInteger(number))
    return "Invalid Input, Only give valid Integer";

  if (number % 15 === 0) return "fizzbuzz";
  if (number % 3 === 0) return "fizz";
  if (number % 5 === 0) return "buzz";
  return number;
}
