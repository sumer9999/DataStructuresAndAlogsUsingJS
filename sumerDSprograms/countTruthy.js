let undefvar;
boolArray1 = [0, "", "Paris", 55, NaN, 9, undefvar];

function countTruthy(boolArray) {
  let count = 0;
  for (let boolValue of boolArray) {
    if (boolValue) count++;
  }

  return count;
}

console.log(countTruthy(boolArray1));
