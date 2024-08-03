/**
 * Returns length of longest substring without repeating characters.
 * Use sliding window with 2 pointers
 * 
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * 
 * Time complexity:  O(n)
 * Space complexity: O(1)
 * @param {string} s string
 */
export const lengthOfLongestSubstring = (s) => {
  let max = 0;
  let leftWindowPointer = 0;
  let set = []
  
  for (let rightWindowPointer = 0; rightWindowPointer < s.length; rightWindowPointer++ ) {
    let indexInSet = set.findIndex((e) => e === s[rightWindowPointer])
    if (indexInSet !== -1) {
      set.splice(0, indexInSet + 1)
      leftWindowPointer = rightWindowPointer - set.length
      set.push(s[rightWindowPointer])
    } else {
      set.push(s[rightWindowPointer])
    }
    let windowSize = rightWindowPointer - leftWindowPointer +1;
    if (max < windowSize) {
      max = windowSize
    }
  }
  return max
}
