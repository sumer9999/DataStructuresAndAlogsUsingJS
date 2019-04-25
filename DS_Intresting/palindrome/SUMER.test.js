const {
  checkPalindrome1,
  checkPalindrome2,
  checkPalindrome3
} = require("./palindrome");

test("should check for 1 eq 1", () => {
  expect(checkPalindrome3("SUMER")).toBe(false);
});

test("should check for string eq palindrome", () => {
  expect(checkPalindrome3("AlamalA")).toBe(true);
});
