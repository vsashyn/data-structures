/**
 * https://leetcode.com/problems/add-two-numbers/description/
 * Time complexity:  O(max(m, n)) * 2
 * Space complexity: O(1)
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns
 */
export const addTwoNumbers = (l1, l2) => {
  let result = "";
  let curry = 0;
  let node1 = l1;
  let node2 = l2;

  /**
   * Introducing a mock Node. When we reaching end of a LinkedList,
   * we use this node to
   * 1. Mark that list is ended
   * 2. Use it in calculations
   * @type {ListNode}
   */
  const mock = {
    val: 0,
    next: null,
    mock: true
  }
  do {
    let tempResult = String(node1.val + node2.val + curry);
    if (tempResult.length > 1) {
      curry = Number(tempResult[0]);
      result += tempResult[1];
    } else {
      curry = 0;
      result += tempResult[0];
    }

    node1 = node1.next !== null ?  node1.next : mock
    node2 = node2.next !== null ? node2.next : mock
    
    if (node1.mock && node2.mock && curry !== 0) {
      result += curry
    }
  } while (!node1.mock|| !node2.mock)
  return createLinkedList(result.split(""));
};

/**
 * Accepts array of numbers and returns a LinkedList
 * @param {string[]} arr Array of numbers 
 * @returns {ListNode}
 */
export const createLinkedList = (arr) => {
  let node;
  if (arr[1]) {
    node = new ListNode(Number(arr[0]), createLinkedList(arr.splice(1)));
  } else {
    node = new ListNode(Number(arr[0]));
  }
  return node;
};

/**
 * Node constructor
 * @param {number} val number
 * @param {ListNode} next node
 */
export function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
