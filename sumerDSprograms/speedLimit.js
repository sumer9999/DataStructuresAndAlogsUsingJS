function speedLimit(speed) {
  if (!Number.isInteger(speed)) return "Wrong Input";
  const speedPoint = Math.floor((speed - 70) / 5);

  if (speedPoint <= 0) return "OK";
  if (speedPoint >= 12) return "License Suspended";
  return `${speedPoint} Point(s)`;
}

console.log(speedLimit(50));
console.log(speedLimit(70));
console.log(speedLimit(74));
console.log(speedLimit(75));
console.log(speedLimit(80));
console.log(speedLimit(130));
console.log(speedLimit(180));
