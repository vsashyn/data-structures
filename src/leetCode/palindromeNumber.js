/**
 * Given an integer x, return true if x is a palindrome and false otherwise.
 * Brute force solution using convertion to String
 * 
 * Time complexity: O(1)
 */
export const isPalindrome = (x) => {
  const reverse = String(x).split("").reverse().join("");
  return String(x) === reverse
}

/**
 * Follow up: isPalindrome without converting to String.
 * Use Modulo (%) to get reminder from division.
 * Use Math.floor to round down and get largest integer.
 * 
 */
export const isPalindrome2 = (x) => {
  // edge case
  if (x < 0) return false 
  // edge case
  if (x!== 0 &&  x % 10 == 0) return false
  
  let half = 0;
  // 1
  while (x > half) {
    half = half * 10 +  x % 10
    x = Math.floor(x / 10 )
  }
  // If number is even - 1st condition
  // If odd - second condition
  return x === half || x === Math.floor(half / 10)
}

/**
 * Use full number reverse
 */
export const isPalindrome3 = (x) => {
  if (x < 0) return false 
  let rev = 0
  let copyx = x
  while (x > 0) {
    rev = rev * 10 + x%10
    x = Math.floor(x / 10)
  }
  return rev ===  copyx
}
