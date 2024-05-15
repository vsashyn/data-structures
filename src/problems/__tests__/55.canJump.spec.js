import { canJump } from "../55.canJump";

test("canJump", () => {
  const nums = [2, 3, 1, 1, 4];
  const result = canJump(nums);
  expect(result).toBe(true);
});

test("canJump - Single element array", () => {
  const nums = [0];
  const result = canJump(nums);
  expect(result).toBe(true);
});

test("canJump - Array with all zeros", () => {
  const nums = [0, 0, 0, 0];
  const result = canJump(nums);
  expect(result).toBe(false);
});

test("canJump 4", () => {
  const nums = [2, 0, 3, 0, 4];
  const result = canJump(nums);
  expect(result).toBe(true);
});

test("canJump 4", () => {
  const nums = [4, 3, 2, 1, 0, 4];
  const result = canJump(nums);
  expect(result).toBe(false);
});
