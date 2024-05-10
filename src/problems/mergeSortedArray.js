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
 * Merge 2 sorted arrays for
 */
export const mergeSortedArray2 = (nums1, m, nums2, n) => {
  let mi = 0;
  let ni = 0;
  do {
    if (mi === m) {
      nums1.splice(mi + ni, 0, nums2[ni]);
      ni++;
      continue;
    }
    if (ni === n) {
      break;
    }
    if (nums1[mi] < nums2[ni]) {
      mi++;
    } else {
      nums1.splice(mi, 0, nums2[ni]);
      ni++;
    }
  } while (mi + ni !== m + n);
  nums1.splice(n + m);
};
