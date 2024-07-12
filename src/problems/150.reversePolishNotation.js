/**
 * You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
 * Evaluate the expression. Return an integer that represents the value of the expression.
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  let operators = ["+", "-", "/", "*"];
  for (let i = 0; i < tokens.length; i++) {
    if (!isNaN(Number(tokens[i]))) {
      stack.push(Number(tokens[i]));
      continue;
    }
    if (operators.some((e) => e === tokens[i])) {
      if (tokens[i] === "+") {
        let n1 = stack.pop();
        let n2 = stack.pop();
        stack.push(Number(n2) + Number(n1));
      }
      if (tokens[i] === "-") {
        let n1 = stack.pop();
        let n2 = stack.pop();
        stack.push(Number(n2) - Number(n1));
      }
      if (tokens[i] === "/") {
        let n1 = stack.pop();
        let n2 = stack.pop();
        stack.push(Math.trunc(Number(n2) / Number(n1)));
      }
      if (tokens[i] === "*") {
        let n1 = stack.pop();
        let n2 = stack.pop();
        stack.push(Number(n2) * Number(n1));
      }
    }
  }
  return stack[0];
};
