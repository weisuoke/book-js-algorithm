const removeElement = (nums: number[], val: number): number => {
  const n: number = nums.length;
  let left: number = 0;
  for (let right = 0; right < n; right++) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      left++;
    }
  }

  return left;
};

export default removeElement;
