import { fibonacciEvenSum } from "../fibonacciEvenSum";

test("fibonacciEvenSum", () => {
  expect(fibonacciEvenSum(10)).toBe(10);
});

test("fibonacciEvenSum 2", () => {
  expect(fibonacciEvenSum(100)).toBe(44);
});

test("fibonacciEvenSum 3", () => {
  expect(fibonacciEvenSum(2)).toBe(2);
});

test("fibonacciEvenSum 3", () => {
  expect(fibonacciEvenSum(1)).toBe(0);
});

test("fibonacciEvenSum 3", () => {
  expect(fibonacciEvenSum(8)).toBe(10);
});

test("fibonacciEvenSum 3", () => {
  expect(fibonacciEvenSum(400)).toBe(188);
});
