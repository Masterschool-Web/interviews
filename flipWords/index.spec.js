const { flipWords } = require(".");

describe('flipWords', () => {
  it('should return an empty string when given an empty string', () => {
    expect(flipWords('')).toEqual('');
  });

  it('should return a string with the words flipped', () => {
    expect(flipWords('Hello World')).toEqual('olleH dlroW');
  });

  it('should return a string with the words flipped', () => {
    expect(flipWords('Hello World, how are you?')).toEqual('olleH ,dlroW woh era ?uoy');
  });
});
