/**
 * Linked list
 *
 * Last in First out
 *
 * Complexity:
 * Adding elements - O(1)
 * Access element by index - O(n)
 *
 * Use case: undo-redo
 *
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }
  push(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    let i = this.head;
    let prev = i;
    while (i !== this.tail) {
      prev = i;
      i = i.next;
    }
    prev.next = null;
    this.tail = prev;
    this.length--;
    return i;
  }
  get(index) {
    if(index < 0 || index > this.length || this.isEmpty()) {
      return null
    }
    let node = this.head;
    
    for(let c = 1; c < index; c++) {
      node = node.next;
    }
    return node
  }
  delete(index) {
    throw new Error("todo");
  }
  isEmpty() {
    return this.length === 0;
  }
}
