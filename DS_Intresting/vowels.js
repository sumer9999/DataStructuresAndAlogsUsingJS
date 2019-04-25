myStr = "This is a beautiful world";
const countVowels = myStr =>
  [...myStr.toLowerCase()].reduce(
    (acc, char) => (["a", "e", "i", "o", "u"].includes(char) ? ++acc : acc),
    0
  );

const countVowels2 = myStr => (myStr.match(/[aeiou]/gi) || []).length;
//myStr.match(/[aeiou]/gi) ?
console.log(countVowels2(myStr));
