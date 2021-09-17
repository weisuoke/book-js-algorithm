import TreeNode from '../models/TreeNode';

const isLeafNode = (node: TreeNode | null): boolean => {
  return node.left === null && node.right === null;
};

const sumOfLeftLeaves = (root: TreeNode | null): number => {
  if (root === null) {
    return 0;
  }

  const queueNode: TreeNode[] = [];
  queueNode.push(root);
  let ans: number = 0;

  while (queueNode.length) {
    const now = queueNode.shift();
    if (now.left !== null) {
      if (isLeafNode(now.left)) {
        ans += now.left.val;
      } else {
        queueNode.push(now.left);
      }
    }

    if (now.right !== null) {
      if (!isLeafNode(now.right)) {
        queueNode.push(now.right);
      }
    }
  }

  return ans;
};
