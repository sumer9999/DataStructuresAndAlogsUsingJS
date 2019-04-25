function sort(arr, start, end) {
  for (let i = start; i <= end; i++) {
    for (let j = i + 1; j <= end; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

function nextPalin(arr) {
  let mid = parseInt((arr.length - 1) / 2),
    i;
  for (i = mid - 1; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) break;
  }

  //TO BE CONTINUED

  console.log(i);
  sort(arr, i + 1, mid);
  console.log(arr);
}

nextPalin([1, 3, 2, 4, 4, 2, 3, 1]);
