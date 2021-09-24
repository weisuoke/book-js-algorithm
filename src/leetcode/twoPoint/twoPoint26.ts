const removeDuplicates = (nums: number[]): number => {
  const n = nums.length;

  if (n === 0) {
    return 0;
  }

  let fast = 1;
  let slow = 1;

  while (fast < n) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast];
      ++slow;
    }
    ++fast;
  }

  return slow;
};

export default removeDuplicates;
