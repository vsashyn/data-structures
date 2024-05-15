/**
 * Using greedy algorithm.
 * Go from end to start. Select target, then check if we can get to it.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {*} nums
 */
export const canJump = (nums) => {
  let targetInd = nums.length - 1;
  let pointerInd = nums.length - 1;

  while (pointerInd >= 0) {
    let pointer = nums[pointerInd];
    if (pointer + pointerInd >= targetInd) {
      // update target
      targetInd = pointerInd;
      pointerInd--;
    } else {
      // targetInd should not be updated
      pointerInd--;
    }
  }
  if (pointerInd < 0 && targetInd !== 0) {
    return false;
  } else {
    return true;
  }
};
