const chechValidString = (s: string): boolean => {
  const leftStack: number[] = [];
  const asteriskStack: number[] = [];
  const n: number = s.length;
  for (let i = 0; i < n; i++) {
    const c = s[i];
    if (c === '(') {
      leftStack.push(i);
    } else if (c === '*') {
      asteriskStack.push(i);
    } else if (leftStack.length) {
      leftStack.pop();
    } else if (asteriskStack.length) {
      asteriskStack.pop();
    } else {
      return false;
    }
  }

  while (leftStack.length && asteriskStack.length) {
    const leftIndex = leftStack.pop();
    const rightIndex = asteriskStack.pop();
    if (leftIndex > rightIndex) {
      return false;
    }
  }

  return leftStack.length === 0;
};
