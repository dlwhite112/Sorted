
const arithmetic = require('../arithmetic');

test('adds 1 + 2 to equal 3', () => {
  expect(arithmetic.add(1, 2)).toBe(3);
});

test('subtract 1 + 2 to equal 3', () => {
  expect(arithmetic.subtract(100, 91)).toBe(9);
});

test('multiply 5 * 2 to equal 10', () => {
  expect(arithmetic.multiply(5, 2)).toBe(10);
});

test('divide 10 / 2 to equal 5', () => {
  expect(arithmetic.divide(10, 2)).toBe(5);
});
