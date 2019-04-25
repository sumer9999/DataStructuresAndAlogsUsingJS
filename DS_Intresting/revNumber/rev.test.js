const { reverseNumber } = require("./revNumber");

test("should revrese a number", () => {
  expect(reverseNumber(123)).toBe(321);
});
