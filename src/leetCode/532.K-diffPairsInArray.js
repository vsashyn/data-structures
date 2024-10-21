import { deepStrictEqual as equal } from "node:assert";

var findPairs = function (nums, k) {
  nums.sort((a, b) => a - b);
  let pairs = {};
  let l = 0;
  for (let r = 0; r < nums.length; r++) {
    while (Math.abs(nums[r] - nums[l]) > k) {
      l++;
    }
    if (l !== r && Math.abs(nums[r] - nums[l]) === k) {
      pairs[`${nums[r]}_${nums[l]}`] = 1;
    }
  }
  return Object.keys(pairs).length;
};
equal(findPairs([3, 1, 4, 1, 5], 2), 2);
equal(findPairs([-10, -5, 0, 1, 2], 5), 2);
equal(findPairs([-10, -10, -9, -8, 0], 1), 2);
equal(findPairs([3, 1, 4, 1, 5], 0), 1);
