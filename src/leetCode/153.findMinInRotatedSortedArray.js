/**
 * Find min in rotated sorted array
 * Use Binary Search to make it in O(log(N))
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  if (nums[r] > nums[l]) return nums[l];

  let target = nums[0];

  while (l < r) {
    let m = Math.floor((l + r) / 2);
    if (nums[l] < nums[m]) {
      l = m;
      continue;
    }
    if (nums[r] > nums[m]) {
      if (target > nums[m]) {
        target = nums[m];
      }
      r = m - 1;
      continue;
    }
    if (m === l) return nums[r];
  }
  return target;
};
