import TreeNode from '../models/TreeNode';

// BFS 解法
const hasPathSumBFS = (root: TreeNode | null, targetSum: number): boolean => {
  if (root === null) {
    return false;
  }

  const queueNode: TreeNode[] = [];
  const queueVal: number[] = [];

  queueNode.push(root);
  queueVal.push(root.val);

  while (queueNode.length) {
    const now = queueNode.shift();
    const temp = queueVal.shift();
    if (now.left === null && now.right === null) {
      if (temp === targetSum) {
        return true;
      }
      continue;
    }

    if (now.left !== null) {
      queueNode.push(now.left);
      queueVal.push(now.left.val + temp);
    }

    if (now.right !== null) {
      queueNode.push(now.right);
      queueVal.push(now.right.val + temp);
    }
  }

  return false;
};
