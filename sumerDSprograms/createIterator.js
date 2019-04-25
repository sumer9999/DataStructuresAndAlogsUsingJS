function sumerIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start,
    iterationCount = 0;

  return {
    next: function () {
      if (nextIndex <= end) {
        let tempObj = { value: nextIndex, done: false };
        iterationCount++;
        nextIndex += step;
        return tempObj;
      }
      return { value: iterationCount, done: true };
    }
  };
}

let sumerSelfIterator = {
  [Symbol.iterator]: function* () {
    // This line can also be written as *[Symbol.iterator]() {   as it also tells generator function in new format
    for (v of [1, 3, 5, 7]) {
      yield v;
    }
  }
};
for (let v of sumerSelfIterator) {
  console.log(v);
}

function* sumerGenerator(start = 0, end = Infinity, step = 1) {
  let iterationCount = 0;
  for (let i = start; i < end; i = i + step) {
    iterationCount++;
    yield i;
  }
  return iterationCount;
}

let it = sumerGenerator(1, 10, 2);

let result = it.next();
while (!result.done) {
  console.log(result.value);
  result = it.next();
}

console.log("Total No of Iterations done are ", result.value);
