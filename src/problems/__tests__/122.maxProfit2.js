import { maxProfit } from "../122.maxProfit2";

describe("maxProfit", () => {
  it("should return the maximum profit", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7);
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
    expect(maxProfit([2, 4, 1])).toBe(2);
    expect(maxProfit([1, 9, 6, 9, 1, 7, 1, 1, 5, 9, 9, 9])).toBe(25);
  });
});
