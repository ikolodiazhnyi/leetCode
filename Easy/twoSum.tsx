/* 
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/


function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let n = i + 1; n < nums.length; n++) {
      if (nums[i] + nums[n] === target) {
        return [i, n];
      }
    }
  }
  return [];
}
