/**
 * Remove duplicates from sorted array. Each element should be present at most twice.
 *
 * Intuition: go through the numbers and include those in the result that haven't been included twice already.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export const removeDuplicates = (nums) => {
  let i = 0;

  for (el of nums) {
    if (i == 0 || i == 1 || el > nums[i - 2]) {
      nums[i] = el;
      i++;
    }
  }
  return i;
};
