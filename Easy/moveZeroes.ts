/**
 Do not return anything, modify nums in-place instead.
 */

function moveZeroes(nums: number[]): void {
  let filtered = nums.filter((n) => n !== 0);

  for (let i = 0; i < nums.length; i++) {
    nums[i] = filtered[i] || 0;
  }
}
