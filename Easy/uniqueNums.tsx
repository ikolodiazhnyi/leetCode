/* 
  Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
    answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
    answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
  Note that the integers in the lists may be returned in any order.
*/

function findDifference(nums1: number[], nums2: number[]): number[][] {
  return [
    [...new Set(nums1.filter((n) => !nums2.includes(n)))],
    [...new Set(nums2.filter((n) => !nums1.includes(n)))],
  ];
}
