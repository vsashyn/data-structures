/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let map = new Map();
  inorder.forEach((el, ind) => map.set(el, ind));

  function arrayToTree(preStart, preEnd, inStart, inEnd) {
    if (preStart > preEnd || inStart > inEnd) {
      return null;
    }
    let rootVal = preorder[preStart];
    let root = new TreeNode(rootVal);
    let mid = map.get(rootVal);
    let leftTreeSize = mid - inStart;

    root.left = arrayToTree(
      preStart + 1,
      preStart + leftTreeSize,
      inStart,
      mid - 1
    );
    root.right = arrayToTree(
      preStart + leftTreeSize + 1,
      preEnd,
      mid + 1,
      inEnd
    );
    return root;
  }

  return arrayToTree(0, preorder.length - 1, 0, inorder.length - 1);
};
