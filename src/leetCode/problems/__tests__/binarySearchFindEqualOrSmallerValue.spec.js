import { binarySearchFindEqualOrSmallerValue } from "../binarySearchFindEqualOrSmallerValue";

test("binarySearchClosestValue 1", () => {
  //exact match
  expect(binarySearchFindEqualOrSmallerValue([1, 2, 6, 8, 9], 8)).toBe(8);
  // left bound
  expect(binarySearchFindEqualOrSmallerValue([1, 2, 6, 8, 9], 3)).toBe(2);
  // right bound
  expect(binarySearchFindEqualOrSmallerValue([1, 2, 6, 8, 9, 12], 10)).toBe(9);
  // two values
  expect(binarySearchFindEqualOrSmallerValue([10, 20], 15)).toBe(10);
});
