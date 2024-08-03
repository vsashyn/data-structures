/**
 * You must implement the functions of the class such that each function works in average O(1) time complexity.
 *
 * Time complexity: O()
 */

var RandomizedSet = function () {
  this.map = {};
  this.list = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (typeof this.map[val] !== "undefined") {
    return false;
  }
  this.map[val] = this.list.push(val) - 1;
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  let ind = this.map[val];

  if (typeof ind !== "undefined") {
    this.list[ind] = this.list[this.list.length - 1];
    this.map[this.list[ind]] = ind;
    this.list.pop();
    this.map[val] = undefined;
    return true;
  }
  return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.list[Math.floor(Math.random() * this.list.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
