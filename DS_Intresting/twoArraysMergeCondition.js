let arrPositive = [2, 5, 7, 13];
let arrNegative = [-1, -4, -6, -12];
function mergeArrayRandom(arrPositive, arrNegative) {
  let arrPos = arrPositive.slice(0),
    arrNeg = [...arrNegative],
    resultArr = [];
  while (arrPos.length >= 1 && arrNeg.length >= 1)
    resultArr = [
      ...resultArr,
      getRandomElement(arrPos),
      getRandomElement(arrNeg)
    ];

  return resultArr;
}

console.log(mergeArrayRandom(arrPositive, arrNegative));

function getRandomElement(arr) {
  let index = Math.floor(Math.random() * arr.length);
  let ele = arr[index];
  arr.splice(index, 1);
  return ele;
}
