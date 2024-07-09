import { fibonacciEvenSum } from "../fibonacciEvenSum";

test("Sum of even Fibonacci numbers up to 1", () => {
  expect(fibonacciEvenSum(1)).toBe(0);
});

test("Sum of even Fibonacci numbers up to 2", () => {
  expect(fibonacciEvenSum(2)).toBe(2);
});

test("Sum of even Fibonacci numbers up to 8", () => {
  expect(fibonacciEvenSum(8)).toBe(10);
});

test("Sum of even Fibonacci numbers up to 10", () => {
  expect(fibonacciEvenSum(10)).toBe(10);
});

test("Sum of even Fibonacci numbers up to 34", () => {
  expect(fibonacciEvenSum(34)).toBe(44);
});

test("Sum of even Fibonacci numbers up to 144", () => {
  expect(fibonacciEvenSum(144)).toBe(188);
});

test("Sum of even Fibonacci numbers with zero input", () => {
  expect(fibonacciEvenSum(0)).toBe(0);
});
