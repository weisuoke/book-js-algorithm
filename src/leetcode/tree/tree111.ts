import TreeNode from '../models/TreeNode';

const minDepth = (root: TreeNode | null): number => {
  if (root === null) return 0;

  const ml = minDepth(root.left);
  const mr = minDepth(root.right);

  return ml === 0 || mr === 0 ? ml + mr + 1 : Math.min(ml, mr) + 1;
};

export default minDepth;
