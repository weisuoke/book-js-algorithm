const numberOfBoomerangs = (points: number[][]): number => {
  let ans: number = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const p of points) {
    const cnt = new Map();
    // eslint-disable-next-line no-restricted-syntax
    for (const q of points) {
      const dis = (p[0] - q[0]) * (p[0] - q[0]) + (p[1] - q[1]) * (p[1] - q[1]);
      cnt.set(dis, (cnt.get(dis) || 0) + 1);
    }
    // @ts-ignore
    // eslint-disable-next-line no-restricted-syntax
    for (const [, m] of cnt.entries()) {
      ans += m * (m - 1);
    }
  }

  return ans;
};

export default numberOfBoomerangs;
