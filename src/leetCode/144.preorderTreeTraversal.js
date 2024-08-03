/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// array
let preorderTraversal = function (root) {
  let order = [];
  let stack = [];
  function traverse(node) {
    if (!node) return null;
    stack.push(node);
    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }
  }
  traverse(root);
  return stack.map((e) => e.val);
};
// recursion
let preorderTraversal2 = function (root) {
  let order = [];
  function traverse(node) {
    if (!node) return null;
    order.push(node.val);
    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }
  }
  traverse(root);
  return order;
};
