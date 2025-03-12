const { returnsTrue } = require('./fn');

describe('returnsTrue tests', () => {
  it('returnsTrue returns true', () => {
    expect(returnsTrue()).toBe(true);
  });
});