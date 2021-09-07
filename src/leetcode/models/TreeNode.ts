// Definition for a binary tree node.
class TreeNode {
  val: number;

  left: TreeNode | null;

  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const convertArrayToTreeNode = (arr: number[]): TreeNode => {
  if (!arr.length) return null;
  const root = new TreeNode(arr[0]);
  const tns = [root];
  for (let i = 1; i < arr.length; i += 2) {
    const tn = tns.shift();
    tn.left = new TreeNode(arr[i]);
    tn.right = new TreeNode(arr[i + 1]);
    tns.push(tn.left);
    tns.push(tn.right);
  }
  return root;
};

export { convertArrayToTreeNode };

export default TreeNode;
