import {sort} from '../bubbleSort'

test("1", () => {
  const a = [1, 2, 3];
  expect(a).toEqual(sort(a));
});

test("2", () => {
  const a = [5, 2, 3];
  expect([2, 3, 5]).toEqual(sort(a));
});

test("3", () => {
  const a = [10, 0, -1, 12, 5, 2, 3];
  expect([-1, 0, 2, 3, 5, 10, 12]).toEqual(sort(a));
});
