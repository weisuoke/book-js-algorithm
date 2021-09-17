import TreeNode from '../models/TreeNode';

// BFS 解法
const invertTreeBFS = (root: TreeNode | null): TreeNode | null => {
  if (root === null) {
    return null;
  }

  const queueNode: TreeNode[] = [];

  queueNode.push(root);

  while (queueNode.length) {
    const now: TreeNode = queueNode.shift();
    const leftNode: TreeNode = now.left;
    now.left = now.right;
    now.right = leftNode;

    if (now.left !== null) {
      queueNode.push(now.left);
    }

    if (now.right !== null) {
      queueNode.push(now.right);
    }
  }

  return root;
};
