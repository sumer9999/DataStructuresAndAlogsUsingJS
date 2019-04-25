let myStr = "355385";

function maxChar(myStr) {
  let charObj = {},
    maxValue = 0;
  return [...myStr].reduce((_, char) => {
    charObj[char] = charObj[char] + 1 || 1;
    return Object.keys(charObj).reduce((a, b) => {
      return charObj[a] > charObj[b] ? a : b;
    });
  });
}

function maxChar2(myStr) {
  myStr = typeof myStr === "string" ? myStr : myStr.toString();

  let myObj = [...myStr].reduce((obj, c) => {
    obj[c] = obj[c] + 1 || 1;
    return obj;
  }, {});

  return Object.keys(myObj).reduce((m, i) => (myObj[i] > myObj[m] ? i : m));
}

console.log(maxChar3(myStr));
module.exports = { maxChar };

// function maxChar(myStr) {
//     //let charMap = new Map();
//     let charValueArr = [...myStr].reduce((acc, char) => {
//       if (acc.has(char)) acc.set(char, acc.get(char) + 1);
//       else if (char !== " ") acc.set(char, 1);
//       return acc;
//     }, new Map());

//     return Array.from(charValueArr).reduce((acc, [key, value]) => {
//       if (acc[1] < value) acc = [key, value];
//       return acc;
//     })[0];
//   }

function maxChar3(myStr) {
  myStr = typeof myStr === 'string' ? myStr : myStr.toString();

  let accObj = [...myStr].reduce((accObj, n) => {
    accObj[n] = accObj[n] + 1 || 1;
    return accObj;
  }, {});

  let maxChar = Object.keys(accObj).reduce((max, key) => accObj[key] > accObj[max] ? key : max);

  return maxChar;
}