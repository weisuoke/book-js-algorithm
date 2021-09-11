import TreeNode from '../models/TreeNode';

const postorder = (root: TreeNode | null, res: number[]) => {
  if (root === null) {
    return;
  }
  postorder(root.left, res);
  postorder(root.right, res);
  res.push(root.val);
};

const postorderTraversal = (root: TreeNode | null): number[] => {
  const res: number[] = [];
  postorder(root, res);
  return res;
};

export default postorderTraversal;
