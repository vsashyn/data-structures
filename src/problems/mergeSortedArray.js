/**
 *
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 *
 * modify nums1
 */
export const mergeSortedArray = (nums1, m, nums2, n) => {
  nums2.splice(n);
  nums1.splice(m);
  nums1.push(...nums2);
  nums1.sort((a, b) => {
    return a - b;
  });
};
/**
 *
 * Merge 2 sorted arrays using O(n) complexity.
 * Move from left to right. Modify first array.
 */
export const mergeSortedArray2 = (nums1, m, nums2, n) => {
  let right = m + n - 1;
  let i = m - 1;
  let j = n - 1;

  while (j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[right] = nums1[i];
      i--;
      right--;
    } else {
      nums1[right] = nums2[j];
      j--;
      right--;
    }
  }
  return nums1;
};
