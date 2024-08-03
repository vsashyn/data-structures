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
