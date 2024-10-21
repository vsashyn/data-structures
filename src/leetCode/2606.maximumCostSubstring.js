import { deepStrictEqual as equal } from "node:assert";
/**
 * @param {string} s
 * @param {string} chars
 * @param {number[]} vals
 * @return {number}
 */
var maximumCostSubstring = function (s, chars, vals) {
  let dict = {};
  for (let i = 0; i < chars.length; i++) {
    dict[chars[i]] = vals[i];
  }
  for (let i = 97; i < 123; i++) {
    let char = String.fromCharCode(i);
    if (typeof dict[char] === "undefined") {
      dict[char] = i - 96;
    }
  }
  let max = Number.MIN_SAFE_INTEGER;
  let l = 0;
  let curSum = 0;
  for (let r = 0; r < s.length; r++) {
    curSum += dict[s[r]];
    while (curSum < 0) {
      curSum -= dict[s[l]];
      l++;
      if (r === l) {
        max = Math.max(max, curSum);
      }
    }
    max = Math.max(max, curSum);
  }
  return max;
};
equal(maximumCostSubstring("adaa", "d", [-1000]), 2);
equal(maximumCostSubstring("abc", "abc", [-1, -1, -1]), 0);
equal(maximumCostSubstring("abcd", "", []), 10);
