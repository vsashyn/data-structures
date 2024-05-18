import { jump } from "../45.jumpGame2";

describe("jump", () => {
  it("should return the minimum number of jumps to reach the last index", () => {
    // Test case 1
    expect(jump([2, 3, 1, 1, 4])).toBe(2);

    // Test case 2
    expect(jump([2, 3, 0, 1, 4])).toBe(2);

    // // Test case 3
    expect(jump([1, 2, 3, 4, 5])).toBe(3);

    // // Test case 4
    expect(jump([5, 4, 3, 2, 1])).toBe(1);

    // // Test case 5
    expect(jump([0])).toBe(0);
  });
});
