let limit = 30;
let arr = [...Array(limit + 1).keys()].filter(_ => _ != 0);

function fizzbuzz(num) {
  let fizz = num % 3 === 0,
    buzz = num % 5 === 0;

  if (fizz && buzz) return " FIZZBUZZ";
  if (fizz) return " FIZZ";
  if (buzz) return " BUZZ";
  return num;
}

console.log(fizzbuzz(arr[9]));
console.log(arr[9]);
