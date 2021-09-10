const chalkReplacer = (chalk: number[], k: number): number => {
  const n: number = chalk.length;
  let total: number = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const num of chalk) {
    total += num;
  }
  k %= total;
  let res: number = -1;
  for (let i = 0; i < n; ++i) {
    if (chalk[i] > k) {
      res = i;
      break;
    }
    k -= chalk[i];
  }

  return res;
};

export default chalkReplacer;
