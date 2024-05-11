import { removeElements } from "../27.removeElements";

test("removeElements", () => {
  let nums = [3, 2, 2, 3];
  let val = 3;
  expect(removeElements(nums, val)).toStrictEqual(2);
  expect(nums).toStrictEqual([2, 2]);
});

test("removeElements", () => {
  let nums = [0, 1, 2, 2, 3, 0, 4, 2];
  let val = 2;
  expect(removeElements(nums, val)).toStrictEqual(5);
  console.log(nums);
  expect(nums.sort()).toStrictEqual([0, 1, 4, 0, 3].sort());
});
