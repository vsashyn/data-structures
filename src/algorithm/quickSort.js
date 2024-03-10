/**
 * Quick sort
 * Devide and conquer
 * 
 * Select pivot (middle element).
 * Create 2 arrays less and greater.
 * Then using recursion pass both to sort.
 * 
 * Complexity: O(n * log n)
 */
export const quickSort = (arr) => {
  if (arr.length < 2) return arr
  // log n to complexity
  const pivotInd = Math.floor(arr.length / 2);
  const pivot = arr[pivotInd];
  const less = []
  const greater = []
  // n to complexity
  for(let i = 0; i < arr.length; i ++) {
    if (i !== pivotInd) {
      if (pivot > arr[i]) {
        less.push(arr[i])
      } else {
        greater.push(arr[i])
      }
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
}
