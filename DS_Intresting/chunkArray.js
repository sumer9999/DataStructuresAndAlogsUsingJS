function chunkArr99(A, size) {   // Latest and Best solution, Not best performance.
  let chunkedArr = A.reduce((accArr, ele) => {
    let lastArr = accArr[accArr.length - 1];
    (lastArr.length < size) ? lastArr.push(ele) : accArr.push([ele]);
    return accArr;
  }, [[]]);
  return chunkedArr;
}



function chunkArr4([arr, n]) {    // Better in performance
  let resultArr = [];
  for (let i = 0; i < arr.length; i += n) {
    resultArr = [...resultArr, arr.slice(i, i + n)];
  }
  return resultArr;
}

function chunkArr5([arr, n], resArr = []) {
  for (let i = 0; i < arr.length; i += n) resArr.push(arr.slice(i, i + n))
  return resArr;
}

console.log(chunkArr5([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 2]));

function chunkArr3([arr, n]) {
  return arr.reduce((resultArr, ele) => {
    lastArr = resultArr[resultArr.length - 1];
    !lastArr || lastArr.length === n
      ? resultArr.push([ele])
      : lastArr.push(ele);
    return resultArr;
  }, []);
}

function chunkArr([arr, n]) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i += n) {
    let tmpArr = [];
    for (j = 0; j < n; j++) {
      if (arr[i + j]) tmpArr = [...tmpArr, arr[i + j]];
    }
    resultArr = [...resultArr, tmpArr];
  }
  return resultArr;
}

function chunkArr2([arr, n]) {
  let resultArr = [];

  for (let ele of arr) {
    lastArr = resultArr[resultArr.length - 1];
    !lastArr || lastArr.length === n
      ? resultArr.push([ele])
      : lastArr.push(ele);
  }
  return resultArr;
}
