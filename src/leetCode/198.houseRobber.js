import { deepStrictEqual as equal } from "node:assert";

/**
 *
 * Recurring relationship:
 * a_i = max(c + a[i-2], a[i-1])
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function rob(nums) {
  let rob1 = 0;
  let rob2 = 0;

  // [rob1, rob2, ....]
  for (let i = 0; i < nums.length; i++) {
    let tmp = Math.max(nums[i] + rob1, rob2);
    rob1 = rob2;
    rob2 = tmp;
  }
  return rob2;
}
equal(rob([2, 7, 9, 3, 1]), 12);

/**
 * Recursive approach
 * Time complexity: O(2^n)
 * Space complexity: O(n)
 */
function robRec(nums) {
  function dfs(i) {
    if (i >= nums.length) {
      return 0;
    }
    return Math.max(dfs(i + 1), nums[i] + dfs(i + 2));
  }
  return dfs(0);
}
equal(robRec([2, 7, 9, 3, 1]), 12);
