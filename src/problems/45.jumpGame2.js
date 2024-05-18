/**
 *
 * @param {number[]} nums
 * @return {number}
 */
export const jump = function (nums) {
  let pointerInd = 0;
  let jumps = 0;
  let ready = false;
  // corner cases
  if (nums.length === 1) {
    return 0;
  }
  do {
    let nextInd = -1;
    let maxJump = -1;
    for (let i = 1; i <= nums[pointerInd]; i++) {
      if (pointerInd + i >= nums.length - 1) {
        jumps++;
        ready = true;
        return jumps;
      }

      if (maxJump < nums[i + pointerInd] + pointerInd + i) {
        maxJump = nums[i + pointerInd] + pointerInd + i;
        nextInd = pointerInd + i;
      }
    }
    pointerInd = nextInd;
    jumps++;
  } while (ready !== true);
  return jumps;
};
