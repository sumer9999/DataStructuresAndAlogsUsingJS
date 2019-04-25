function anagram(S1 = '', S2 = '') {  //Anagram which ignores all non words
  const newStr = S => S.replace(/\W/g, '').toLowerCase().split('').sort().join('');
  return newStr(S1) === newStr(S2);
}

console.log(anagram('I am going%%^&&!,. under', 'I ma going!!!!!!!!#### undeR'));


const _ = require("lodash");

function isAnagram(str1 = "", str2 = "") {
  return _.isEqual(returnObject(str1), returnObject(str2));
}

console.log(isAnagram("TbF", "Btfh"));

function returnObject(str) {
  return [...str.toUpperCase()].reduce((acc, char) => {
    acc[char] = acc[char] + 1 || 1;
    return acc;
  }, {});
}

function isAnagram2(str1, str2) {
  return (
    str1
      .toUpperCase()
      .split("")
      .sort()
      .join("") ===
    str2
      .toUpperCase()
      .split("")
      .sort()
      .join("")
  );
}
