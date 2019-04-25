arrayOfNames = ["Rajesh", "Suresh", "Anilji", "Mohit", "Channi", "Zinga"];

function checkString(name) {
  let re1 = /^[a-z]/i;
  //let re2 = /[]/i
  return re1.test(name);
}

// console.log(checkString("alia"));
// console.log(checkString("Zebra"));

let isEveryCorrect = arrayOfNames.every(checkString);
console.log(isEveryCorrect);
