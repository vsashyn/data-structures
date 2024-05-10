import { mergeSortedArray, mergeSortedArray2 } from "../mergeSortedArray";

test("merge mergeSortedArray", () => {
  let num1 = [1,2,3,0,0,0]
  let m = 3
  let num2 = [2,5,6]
  let n = 3

  let expected = [1,2,2,3,5,6]
  mergeSortedArray(num1, m, num2, n)
  expect(num1).toStrictEqual(expected)
});

test("merge mergeSortedArray2", () => {
  let num1 = [1,2,3,0,0,0]
  let m = 3
  let num2 = [2,5,6]
  let n = 3

  let expected = [1,2,2,3,5,6]
  mergeSortedArray2(num1, m, num2, n)
  expect(num1).toStrictEqual(expected)
});
// total 35 min
