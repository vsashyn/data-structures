/**
 * https://leetcode.com/problems/h-index
 *
 * Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index. According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.
 *
 * Time complexity: O(n*logn)
 * Space complexity: O(1)
 */
var hIndex = function (citations) {
  let c = citations.sort((a, b) => b - a);
  if (c.length === 0) return 0;
  let max = 0;
  for (let i = 0; i < c.length; i++) {
    if (c[i] >= i + 1) {
      max++;
    }
  }
  return max;
};
