const logNums = require("../log-nums");

test("should log numbers 1 - n to the console", () => {
  expect(logNums(10)).toBe(console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
});
