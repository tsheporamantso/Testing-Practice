const calculators = require('./task3.js');

describe('my calculations', () => {
  test('a and b adding', () => {
    expect(calculators.add(2, 2)).toBe(4);
  });

  test('a and b multiply', () => {
    expect(calculators.multiply(5, 5)).toBe(25);
  });

  test('a and b divide', () => {
    expect(calculators.divide(100, 2)).toBe(50);
  });

  test('a and b subtract', () => {
    expect(calculators.subtract(18, 6)).toBe(12);
  });
});