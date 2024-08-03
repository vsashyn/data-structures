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
