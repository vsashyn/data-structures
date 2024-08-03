/**
 *
 * Definition for singly-linked list.
 * @param {*} val
 * @param {*} next
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/*
  Test node
*/
let l1 = new ListNode(
  5,
  new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1))))
);

/**
 * Recursive way to reverse list
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let root = null;
  function setParent(n, parent) {
    parent.next = null;
    if (!n.next) {
      n.next = parent;
      root = n;
    } else {
      setParent(n.next, n);
      n.next = parent;
    }
  }
  if (!!head && !head.next) {
    return head;
  }
  if (!!head && !!head.next) {
    setParent(head.next, head);
  }
  return root;
};

/**
 * Iterative way to reverse LinkedList
 * @param {*} head
 */
const reverseListIteratively = (head) => {
  let cur = head;
  let prev = null;

  while (cur !== null) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};

console.log(reverseListIteratively(l1));
