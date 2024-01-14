/**
 * Stack
 * Last in First out
 *
 * Complexity:
 * Adding elements - O(1)
 * Access element by index - O(n)
 *
 * Use case: navigation in browser
 *
 */
class Stack {
  constructor() {
    this.stack = [];
  }
  pop() {
    return this.stack.pop();
  }
  push(item) {
    this.stack.push(item);
  }
  peek() {
    this.stack[this.length - 1];
  }
  isEmpty() {
    return this.length === 0;
  }
  get length() {
    return this.stack.length;
  }
}

/**
 * Queues
 * First in First Out
 *
 * Complexity:
 * Adding elements - O(1)
 * Access element by index - O(n)
 *
 * Use case: cache
 */

class Queue {
  constructor() {
    this.queue = [];
  }
  // add item to back
  enqueue(item) {
    this.queue.push(item);
  }
  // remove item from front
  dequeue() {
    return this.queue.shift();
  }
  // return item at the front
  peek() {
    this.queue[0];
  }
  isEmpty() {
    this.length === 0;
  }
  get length() {
    this.queue.length;
  }
}

/**
 * Linked list
 *
 * Last in First out
 *
 * Complexity:
 * Adding elements - O(1)
 * Access element by index - O(n)
 *
 * Use case:
 *
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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

module.exports = {
  LinkedList,
  Stack,
  Queue
}
