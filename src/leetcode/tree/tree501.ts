import TreeNode from '../models/TreeNode';

const findMode = (root: TreeNode | null): number[] => {
  let base: number = 0;
  let count: number = 0;
  let maxCount: number = 0;
  let answer: number[] = [];

  const update = (x: number): void => {
    if (x === base) {
      ++count;
    } else {
      count = 1;
      base = x;
    }
    if (count === maxCount) {
      answer.push(base);
    }
    if (count > maxCount) {
      maxCount = count;
      answer = [base];
    }
  };

  const dfs = (o: TreeNode | null): void => {
    if (!o) {
      return;
    }
    dfs(o.left);
    update(o.val);
    dfs(o.right);
  };

  dfs(root);
  return answer;
};

export default findMode;
