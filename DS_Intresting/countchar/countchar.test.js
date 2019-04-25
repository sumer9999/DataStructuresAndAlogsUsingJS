const { maxChar } = require("./countChar");

test("should check for max char", () => {
  expect(maxChar("This is a beautiful world")).toBe("i");
});
