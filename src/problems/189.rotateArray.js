/**
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
var rotate = function (nums, k) {
  let arr = Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    let newInd = i + k;
    if (newInd >= nums.length) {
      newInd = newInd % nums.length;
    }
    arr[newInd] = nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = arr[i];
  }
};
