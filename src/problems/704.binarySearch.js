/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let m = Math.floor((r - l) / 2);
    let i = l + m;
    if (nums[i] === target) return i;
    if (nums[i] > target) {
      r = i - 1;
    }
    if (nums[i] < target) {
      l = i + 1;
    }
  }
  return -1;
};
