let myStr = "My Name Is Sumer Singh";

let a2 = [...myStr].reverse();

let a3 = [...];
console.log(a2);

function reverseString1(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

function reverseString2(str) {
  return [...myStr].reverse().join("");
}

function reverseString3(str) {
  let revString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }
  return revString;
}

function reverseString33(str) {
  let revString = "";
  for (let c of str) revString = c + revString;
  return revString;
}

function reverseString4(str) {
  return [...str].reduce((a, c) => c + a);
}

function reverseString5(str) {
  let revString = "";
  if (str === "") return "";
  return reverseString5(str.slice(1)) + str[0];
}

//console.log(reverseString5(myStr));
