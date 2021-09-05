import Stack from '../../data-structures/stack';

const isValid = (s: string): boolean => {
  const n = s.length;
  if (n % 2 !== 0) {
    return false;
  }

  const pairs = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ]);

  const stack = new Stack();

  for (const ch of s) {
    if (pairs.has(ch)) {
      if (!stack.size() || stack.peek() !== pairs.get(ch)) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(ch);
    }
  }

  return !stack.size();
};

export default isValid;
