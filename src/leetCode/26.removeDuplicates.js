/**
 * 26. Remove duplicates from sorted array
 * @param {*} nums Aray of numbers
 * @returns length of unique elems
 */
export const removeDuplicates = (nums) => {
  let right = 0,
    unique = 0;

  while (right < nums.length) {
    if (nums[unique] === nums[right]) {
      right++;
    } else {
      unique++;
      nums[unique] = nums[right];
      right++;
    }
  }

  return unique + 1;
};
