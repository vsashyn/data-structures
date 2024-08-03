/**
 * Tree
 *
 * Specific type of structured graph that has root, without cycles and directed (parent to child).
 * Example: family tree
 * Example: DOM
 *
 *
 *
 *
 */


/**
 * Tree Node
 */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  toJSON() {
    return {
      value: this.value,
      children: [
        this.left ? this.left.toJSON() : null,
        this.right ? this.right.toJSON() : null,
      ],
    };
  }
}

/**
 * Binary tree: every node can have max 2 children nodes - left and right.
 *
 * Binary search tree: special tree type where values of every node on the left is less then node value,
 * and on the right value is greater than node's value.
 * 
 * Duplicates are not allowed in this implementation
 */
export class BinaryTree {
  constructor() {
    this.root = null;
  }
  addNode(value) {
    if (!this.root) {
      const n = new Node(value);
      this.root = n;
    } else {
      this._addChild(this.root, value);
    }
  }
  /**
   * Remove Node
   * 
   * Should handle cases
   *  - item not found
   *  - item is root node
   *  - item is leaf
   *  - item has children
   * 
   * During search need to have link to parent to 
   * remove element in their children links.
   * 
   * 
   * If item has left child - find free 
   * @param {number | string} value to delete
   */
  removeNode(value) {
    let parent = null;
    let currentNode = this.root;
    let found = false;
    while (!found) {
      
      if (currentNode === null || currentNode.value === null)
        throw "Node not found";

      if (currentNode.value === value) {
        found = true;
        
        if (currentNode.right) {
          if (parent) {
            parent.left = currentNode.right;
          } else {
            // we remove root
            this.root = currentNode.right;
          }
        }
        if (currentNode.left) {
          // find free left spot and add left node
          let n = currentNode.right
          let foundFreeLeft = false
          while(!foundFreeLeft) {
            if (n.left){
              n = n.left
            } else {
              foundFreeLeft = true;
              n.left = currentNode.left;
            }
          }
        }
        // currentNode is leaf
        if (!currentNode.left && !currentNode.right) {
          // remove from parent
          if (parent.left && parent.left.value === value) {
            parent.left = null
          } else {
            parent.right = null
          }
        }
      } else if (currentNode.value > value) {
        // go left
        parent = currentNode;
        currentNode = currentNode.left;
      } else {
        // go right
        parent = currentNode;
        currentNode = currentNode.right;
      }
     }
  }
  /**
   * Recursion helper function for addChild function 
   * @param {Node} node 
   * @param {string | number} value 
   */
  _addChild(node, value) {
    if (node.value > value) {
      if (node.left) {
        this._addChild(node.left, value);
      } else {
        node.left = new Node(value);
      }
    } else if (node.value < value) {
      if (node.right) {
        this._addChild(node.right, value);
      } else {
        node.right = new Node(value);
      }
    } else {
      throw "No duplicates can be added";
    }
  }
}
