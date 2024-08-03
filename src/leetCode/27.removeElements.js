/**
 * Remove elements from array.
 * May be ineficcient due to removing elements from array.
 * @param {*} nums array of nums
 * @param {*} val val to remove
 * @returns
 */
export const removeElements = (nums, val) => {
  // modify in place
  // return k - length of els that are not  val
  let k = 0;
  for (let i = nums.length - 1; i > -1; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    } else {
      k++;
    }
  }
  return k;
};

/**
 * Using 2 pointers.
 * Instead of deleting elements in place, use overwrite.
 * Left tracks where to insert.
 * Right iterates over array.
 * @param {*} nums
 * @param {*} val
 */
export const removeElements2 = (nums, val) => {
  let left = 0,
    right = 0;
  while (right < nums.length) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      left++;
    }
    right++;
  }
  return left;
};
