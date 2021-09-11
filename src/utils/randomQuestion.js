const randomQuestion = (num, max) => {
  Math.random();
  const result = [];

  for (let i = 0; i < num; i++) {
    result.push(Math.ceil(Math.random() * max));
  }

  return result;
};

// 每天随机刷10到题，2347是leetcode中的总题数
const result = randomQuestion(10, 2347);
console.log(result);
