const findLongestWord = (s: string, dictionary: string[]): string => {
  let res: string = '';
  for (const t of dictionary) {
    let i = 0;
    let j = 0;
    while (i < t.length && j < s.length) {
      if (t[i] === s[j]) {
        ++i;
      }
      ++j;
    }
    if (i === t.length) {
      if (t.length > res.length || (t.length === res.length && t < res)) {
        res = t;
      }
    }
  }
  return res;
};
