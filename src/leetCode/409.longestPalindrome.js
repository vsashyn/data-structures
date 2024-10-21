import { deepStrictEqual as equal } from "node:assert";

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (typeof map[s[i]] === "undefined") {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }
  let hasOdd = 0;
  let even = 0;
  Object.keys(map).map((e) => {
    even += Math.floor(map[e] / 2) * 2;
    if (map[e] % 2 === 1) {
      hasOdd = 1;
    }
  });
  return even + hasOdd;
};

equal(longestPalindrome("abcd"), 1);
equal(longestPalindrome("aacd"), 3);
equal(longestPalindrome("a"), 1);
equal(longestPalindrome("aA"), 1);
equal(longestPalindrome("aabbccdde"), 9);
