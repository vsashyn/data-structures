import { sort } from "../mergeSort";

test(1, () => {
  const a = [1, 2, 3];
  expect(a).toEqual(sort(a));
});
test(2, () => {
  const a = [7, 6, 1, 2, 3];
  expect([1, 2, 3, 6, 7]).toEqual(sort(a));
});
