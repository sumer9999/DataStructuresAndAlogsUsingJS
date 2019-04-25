function isSubsequence2(subs, S) {
  return S.includes(subs);
}

function isSubsequence(str1, str2) {
  let p1 = 0, p2 = 0;

  while (p2 < str2.length) {
    if (str1[p1] === str2[p2]) p1++
    if (p1 === str1.length) return true

    p2++;
  }
  return false;
}


function isSubsPresent(str1, str2) {
  let p1 = 0, p2 = 0;

  while (p2 < str2.length) {
    if (str1[p1] === str2[p2]) p1++
    else p1 = 0;

    if (p1 === str1.length) return true

    p2++;
  }
  return false;
}
//console.log(isSubsequence('hello', 'helltheo world'));
console.log(isSubsPresent('hello', ' hello world'));