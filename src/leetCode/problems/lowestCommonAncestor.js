/*
 *
 *  Lowest common ancestor (LCA)
 *  You are given references to two nodes in a binary tree.
 *  Find the root of the smallest subtree that contains both nodes. (one node may be an ancestor of another, in *which case this node is the solution)
 *  Please do it in O(h), where h is the height of the tree (and please use O(1) in space)
 *
 *                      a
 *                     / \
 *                    /   \
 *                   b     c
 *                  /\    / \
 *                 z  w  e   d
 *                           /\
 *                          j  k
 *
 *
 * Time complexity: O(h*logh)
 * Space complexity: O(1)
 */

export class Node {
  constructor(value, parent) {
    this.value = value;
    this.parent = parent;
  }
  getParent() {
    return this.parent;
  }
}

export function LCA(nodeA, nodeB) {
  let p = nodeB;
  while (true) {
    if (nodeA === p) return p;
    if (!p.parent) {
      break;
    }
    p = p.parent;
  }

  if (nodeA.parent) {
    return LCA(nodeA.parent, nodeB);
  } else {
    return "not found";
  }
}
