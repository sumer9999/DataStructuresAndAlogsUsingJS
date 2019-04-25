function reverseNumber1(num = 1234) {
  console.log(num);
  let revnum = 0;
  while (num) {
    revnum = 10 * revnum + (num % 10);
    num = parseInt(num / 10);
  }
  return revnum;
}

function reverseNumber2(num = 1234) {
  let revString = num
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(revString) * Math.sign(num);
}

console.log(reverseNumber2(139));

module.exports = { reverseNumber1, reverseNumber2 };
