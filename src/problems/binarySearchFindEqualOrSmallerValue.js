/**
 * Find equal or prev_val < target biggest value using Binary Search
 * @param {*} nums
 * @param {*} target Target value
 * @returns
 */
export const binarySearchFindEqualOrSmallerValue = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;
  let res = ""; // intermediate result value

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (nums[m] === target) return nums[m];
    if (target < nums[m]) {
      // not valid values, truncate them
      r = m - 1;
    } else {
      res = nums[m];
      l = m + 1;
    }
  }
  return res;
};
