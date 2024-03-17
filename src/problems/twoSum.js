/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. 
 * You may assume that each input would have exactly one solution, and you may not use the same element twice. 
 * You can return the answer in any order.
 * 
 * HashMap reduces the lookup time complexity to O(1)
 * 
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export default twoSum = (arr, target) => {
  const map = {};
  for (let i = 0 ; i < arr.length; i++) {
    let complement = target - arr[i];
    if (typeof map[complement] !== 'undefined') {
      return [map[complement], i];
    }
    map[arr[i]] = i;
  }
  return null;
};
