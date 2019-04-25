let myStr = "this is a    beautiful world";

function capitalize(myStr) {
  return myStr
    .split(/\s+/)
    .reduce((acc, word) => acc + word[0].toUpperCase() + word.slice(1) + " ");
}

function strCap(S) {
  let res = [...S];
  for (let i = 0; i < res.length; i++) {
    if ((i === 0) || (res[i - 1] === ' ')) res[i] = res[i].toUpperCase();
  }
  return res.join('');
}
console.log(capitalize(myStr));
