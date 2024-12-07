import { removeDuplicates } from "../80.removeDuplicates2";

describe("removeDuplicates", () => {
  it("should remove duplicates from the array", () => {
    const arr = [1, 1, 2, 2, 3];
    const result = removeDuplicates(arr);
    expect(result).toEqual(5);
    expect(arr).toStrictEqual([1, 1, 2, 2, 3]);
  });

  it("should remove duplicates from the array 2", () => {
    const arr = [1, 1, 1, 2, 2, 3];
    const result = removeDuplicates(arr);
    expect(result).toEqual(5);
    expect(arr).toStrictEqual([1, 1, 2, 2, 3]);
  });
});
