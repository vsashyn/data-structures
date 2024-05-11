/**
 * Remove elements from array
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
    console.log(nums, k);
  }
  // nums.sort();
  console.log(nums);
  return k;
};
