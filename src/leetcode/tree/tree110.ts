import TreeNode from '../models/TreeNode';

const recur = (root: TreeNode | null): number => {
  if (root === null) {
    return 0;
  }

  const left: number = recur(root.left);

  if (left === -1) {
    return -1;
  }

  const right: number = recur(root.right);

  if (right === -1) {
    return -1;
  }

  return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1;
};

const isBalanced = (root: TreeNode | null): boolean => {
  return recur(root) !== -1;
};

export default isBalanced;
