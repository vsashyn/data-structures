/**
 *  https://leetcode.com/problems/majority-element/description/
 */

/**
 * Time complexity: O(n)
 * Space complexity:O(n)
 */
export const majorityElement = (nums) => {
  const map = {};
  let majorityEl = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (typeof map[nums[i]] !== "undefined") {
      map[nums[i]] += 1;
    } else {
      map[nums[i]] = 1;
    }
    if (map[majorityEl] < map[nums[i]]) {
      majorityEl = nums[i];
    }
  }
  return majorityEl;
};

/**
 * Boyer-Moore Majority Voting Algorithm
 * https://www.geeksforgeeks.org/boyer-moore-majority-voting-algorithm/
 * Works only when majority is > n / 2 elements
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export const majorityElement3 = (nums) => {
  let count = 0;
  let candidate = -1;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
      count = 1;
    } else {
      if (nums[i] === candidate) {
        count++;
      } else {
        count--;
      }
    }
  }
  // Optional: Extra check
  // Check if candidate occurs more that n/2 times
  count = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === candidate) {
      count++;
    }
  }
  if (count > nums.length / 2) {
    return candidate;
  } else {
    return -1;
  }
};

/**
 * A bit hacky way
 *
 * Time complexity: O(n*log(n))
 * Space complexity: O(1)
 */
export const majorityElement2 = (nums) => {
  nums.sort();
  return nums[Math.floor(nums.length / 2)];
};
