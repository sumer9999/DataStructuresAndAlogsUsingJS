const minOf = (...arr) => arr.reduce((min, val) => Math.min(min, val));

console.log(minOf(1, 2, 3));