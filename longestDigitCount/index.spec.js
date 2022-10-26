const { getLongestDigitCount } = require(".");

describe('getLongestDigitCount', () => {
  it('should return the number of digits in the longest number', () => {
    expect(getLongestDigitCount([1, 22, 333, 4444, 55555, 666666])).toBe(6);
    expect(getLongestDigitCount(['7777777', '8', '999', 1000, '111111', 22222222])).toBe(8);
    expect(getLongestDigitCount([123456789, 98765432100, 999999, 1, 22, '333', 444444])).toBe(11);
  });
});