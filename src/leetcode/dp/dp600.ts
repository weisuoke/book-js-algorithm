// Todo wuxiao 这道题目还不能完全理解
const findIntegers = (n: number): number => {
  const dp: number[] = new Array(31).fill(0);
  // eslint-disable-next-line no-multi-assign
  dp[0] = dp[1] = 1;
  for (let i = 2; i < 31; ++i) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  let pre = 0;
  let res = 0;
  for (let i = 29; i >= 0; --i) {
    // eslint-disable-next-line no-bitwise
    const val = 1 << i;
    // eslint-disable-next-line no-bitwise
    if ((n & val) !== 0) {
      n -= val;
      res += dp[i + 1];
      if (pre === 1) {
        break;
      }
      pre = 1;
    } else {
      pre = 0;
    }

    if (i === 0) {
      ++res;
    }
  }

  return res;
};

export default findIntegers;
