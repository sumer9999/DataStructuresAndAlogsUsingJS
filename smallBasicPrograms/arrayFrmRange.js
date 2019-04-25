function arrayRange(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max) || max < min) {
    console.log("Invalid Input");
    return null;
  }

  const array = [];
  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  return array;
}

let result = arrayRange("4", 46);
if (result) {
  console.log(result);
}
