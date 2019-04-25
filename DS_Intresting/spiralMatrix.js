function matrix(n) {
  let startRow = 0,
    endRow = n - 1,
    startColumn = 0,
    endColumn = n - 1,
    counter = 1,
    results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  while (startColumn <= endColumn && startRow <= endRow) {
    for (let i = startColumn; i <= endColumn; i++)
      results[startRow][i] = counter++;
    startRow++;

    for (let i = startRow; i <= endRow; i++) results[i][endColumn] = counter++;
    endColumn--;

    for (let i = endColumn; i >= startColumn; i--)
      results[endRow][i] = counter++;
    endRow--;

    for (let i = endRow; i >= startRow; i--)
      results[i][startColumn] = counter++;
    startColumn++;
  }

  for (ele of results) console.log(ele);
}

matrix(6);
