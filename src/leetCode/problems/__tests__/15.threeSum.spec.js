import { threeSum, twoSum } from "../15.threeSum";

test("twoSum", () => {
  expect(twoSum([-1, 0, -1, 2, -1], -2)).toEqual([-1, -1]);
  expect(twoSum([1, 4, 5, 3, 0], 7)).toEqual([3, 4]);
  expect(twoSum([1, 4, -5, 3, 0], -4)).toEqual([-5, 1]);
});

test("threeSum", () => {
  expect(threeSum([-1, 0, -1, 2, -1])).toEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
});
