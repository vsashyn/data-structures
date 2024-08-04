/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let arr = [];
  let cur = head;
  while (cur !== null) {
    arr.push(cur);
    cur = cur.next;
  }
  if (!head) {
    return;
  }
  if (arr.length < 3) {
    return;
  }
  let mid = Math.floor(arr.length / 2); // 2
  let l = 0; // 0
  let r = arr.length - 1; // 3
  while (mid < r) {
    arr[l].next = arr[r]; // 1 -> 3
    l++; // 1
    arr[r].next = arr[l]; // 3 -> 2
    r--; // 2
  }
  arr[mid].next = null;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let list = new ListNode(1, new ListNode(2, new ListNode(3)));
let list2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
reorderList(list);
console.log(list);
reorderList(list2);
console.log(list2);
