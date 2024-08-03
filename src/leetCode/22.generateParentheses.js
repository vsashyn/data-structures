/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = [];
  let stack = [];

  function backtrack(openN, closingN) {
    if (openN === closingN && openN === n) {
      result.push(stack.join(""));
      return result;
    }

    if (openN < n) {
      stack.push("(");
      backtrack(openN + 1, closingN);
      stack.pop();
    }

    if (openN > closingN) {
      stack.push(")");
      backtrack(openN, closingN + 1);
      stack.pop();
    }
  }
  backtrack(0, 0);
  return result;
};
