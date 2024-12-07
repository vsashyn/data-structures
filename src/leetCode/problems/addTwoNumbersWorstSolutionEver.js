/**
 * 
 * https://leetcode.com/problems/add-two-numbers/description/
 * 
 */
export const addTwoNumbers = (l1, l2) => {
  // brute force
  let number1=  getNumber(l1)
  let number2 = getNumber(l2)
  return getList(number1 + number2)
}
/**
 * To get the number, we need to travese list
 * and reverse string
 * @param {list} list 
 * @returns 
 */
const getNumber = (list) => {
  let n = ''
  let node = list
  let lastEl = false
  do {
    n+=String(node.val)
    node = node.next;
    if (!node) lastEl = true
  } while (!lastEl)
  return BigInt(n.split('').reverse().join(''));
}

/**
 * Accept bigint and return reversed list
 * @param {BigInt} bigNumber 
 * @returns List
 */
export const getList = (bigNumber) => {
  const getLinkedList = (arr) => {
    const e = Number(arr[0])
    if (arr[1]) {
      return new ListNode(e, getLinkedList(arr.splice(1)))
    } else {
      return new ListNode(e)
    }
  }
  return getLinkedList(bigNumber.toLocaleString('en', {useGrouping: false, }).split("").reverse())
}

export function ListNode (val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
