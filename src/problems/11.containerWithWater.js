/**
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 *
 * @returns maxArea
 *
 */
export const maxArea = () => {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    let steps = right - left;
    let lowerBond = height[left] > height[right] ? height[right] : height[left];
    let isLeftLower = height[right] > height[left] ? true : false;
    let area = steps * lowerBond;
    if (area > maxArea) {
      maxArea = area;
    }
    if (isLeftLower) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};
