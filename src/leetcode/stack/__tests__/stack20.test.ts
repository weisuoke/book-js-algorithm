import isValid from '../stack20';

describe('leetcode 20: isValid', () => {
  test('test ()', () => {
    const string = '()';
    expect(isValid(string)).toBe(true);
  });

  test('test ()[]{}', () => {
    const string = '()[]{}';
    expect(isValid(string)).toBe(true);
  });

  test('test (]', () => {
    const string = '(]';
    expect(isValid(string)).toBe(false);
  });

  test('test ([)]', () => {
    const string = '([)]';
    expect(isValid(string)).toBe(false);
  });

  test('test {[]}', () => {
    const string = '{[]}';
    expect(isValid(string)).toBe(true);
  });
});
