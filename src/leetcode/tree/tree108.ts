// 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。
// 题目描述：https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/
// 题解：https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/solution/jiang-you-xu-shu-zu-zhuan-huan-wei-er-cha-sou-s-33/
import TreeNode from '../models/TreeNode';

const dfs = (nums: number[], lo: number, hi: number): TreeNode | null => {
  if (lo > hi) {
    return null;
  }

  const mid: number = Math.floor((lo + hi) / 2);
  const root: TreeNode = new TreeNode(nums[mid]);
  root.left = dfs(nums, lo, mid - 1);
  root.right = dfs(nums, mid + 1, hi);
  return root;
};

const sortedArrayToBST = (nums: number[]): TreeNode | null => {
  return dfs(nums, 0, nums.length - 1);
};

export default sortedArrayToBST;
