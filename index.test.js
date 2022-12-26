const hex2tailwind = require('./index');

describe('Hex Color input formating', () => {
  test('Hex has no #', () => {
    expect(() => {
      return hex2tailwind('34CCFF');
    }).toThrow();
  });

  test('Hex is too long', () => {
    expect(() => {
      return hex2tailwind('#34CCCFF');
    }).toThrow();
  });

  test('Hex is too short', () => {
    expect(() => {
      return hex2tailwind('#34');
    }).toThrow();
  });

  test('Hex is not formated the right way', () => {
    expect(() => {
      return hex2tailwind('#34#CFF');
    }).toThrow();
  });

  test('Input is a random string', () => {
    expect(() => {
      return hex2tailwind('random');
    }).toThrow();
  });

  test('Input is #xxx Hex ', () => {
    expect(hex2tailwind('#34C')).toBe('indigo-700');
  });

  test('Input is #xxxxxx Hex ', () => {
    expect(hex2tailwind('#34C34C')).toBe('green-500');
  });
});
