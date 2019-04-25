array = [2, 4, 6, 3, 89, 56, 44];

function isIncluding(array, searchElement) {
  for (let element of array) if (element === searchElement) return true;

  return false;
}

console.log(isIncluding(array, 68));
