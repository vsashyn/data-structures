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
 * @return {boolean}
 */
/**
    Using queue
 */
let isSymmetric = function (root) {
  const queue = [];
  queue.push(root, root);
  while (queue.length > 0) {
    let el1 = queue.shift();
    let el2 = queue.shift();
    if (!el1 && !el2) {
      continue;
    }
    if (!el1 || !el2) return false;
    if (el1.val !== el2.val) return false;
    queue.push(el1.right, el2.left);
    queue.push(el1.left, el2.right);
  }
  return true;
};

/**
      Using recursion
   */
let isSymmetric2 = function (root) {
  function isSymmetric(node1, node2) {
    if (!node1 && !node2) {
      return true;
    }
    if (!node1 || !node2) {
      return false;
    }

    if (node1.val !== node2.val) {
      return false;
    }
    return (
      isSymmetric(node1.left, node2.right) &&
      isSymmetric(node1.right, node2.left)
    );
  }

  return isSymmetric(root.left, root.right);
};
