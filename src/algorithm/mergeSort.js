/**
 * Merge sort
 * Divide and conquer
 * Split recursively array to 1 elements array. One element array is sorted.
 * Implement "merge" function that will take 2 arrays as input and merge them.
 * Complexity: O(n * log n)
 * @param {*} arr
 */
export const sort = (arr) => {
  if (arr.length < 2) return arr;
  // Split array to 2 halfs brings (log n)
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(sort(left), sort(right));
};

const merge = (a, b) => {
  const sorted = [];
  // Brings n to complexity
  while (a.length && b.length) {
    if (a[0] < b[0]) {
      sorted.push(a.shift());
    } else {
      sorted.push(b.shift());
    }
  }
  return [...sorted, ...a, ...b];
};
