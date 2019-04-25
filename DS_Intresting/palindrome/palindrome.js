myStr = "AlamalA";

function checkPalindrome1(string) {
  return (
    string ===
    string
      .split("")
      .reverse()
      .join("")
  );
}

function checkPalindrome2(string) {
  for (let i = 0, j = string.length - 1; i < j; i++, j--) {
    if (string[i] !== string[j]) {
      return false;
    }
  }
  return true;
}

checkPalindrome3 = str =>
  [...str].every((c, i) => c === str[str.length - 1 - i]);

console.log(checkPalindrome4("SUMER"));

function checkPalindrome4(str) {
  let len = str.length;
  for (let i = 0; i <= len / 2 - 1; i++) {
    if (str[i] !== str[len - 1 - i]) return false;
  }
  return true;
}

module.exports = { checkPalindrome1, checkPalindrome2, checkPalindrome3 };
