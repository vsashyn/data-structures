/**
 * Return the minimum number of jumps to reach nums[n - 1].
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
export const jump = function (nums) {
  let pointerI = 0;
  let jumps = 0;
  let ready = false;
  // corner cases
  if (nums.length === 1) {
    return 0;
  }
  do {
    let nextI = -1;
    let maxJump = -1;
    // early return when we found a solution
    if (pointerI + nums[pointerI] >= nums.length - 1) {
      jumps++;
      ready = true;
      break;
    }
    for (let i = 1; i <= nums[pointerI]; i++) {
      if (maxJump < nums[i + pointerI] + pointerI + i) {
        maxJump = nums[i + pointerI] + pointerI + i;
        nextI = pointerI + i;
      }
    }
    pointerI = nextI;
    jumps++;
  } while (ready !== true);
  return jumps;
};
