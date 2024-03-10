import { quickSort } from "../quickSort";

test(1, () => {
  const a = [1, 2, 3];
  expect(a).toEqual(quickSort(a));
});
test(2, () => {
  const a = [7, 6, 1, 2, 3];
  expect([1, 2, 3, 6, 7]).toEqual(quickSort(a));
});
