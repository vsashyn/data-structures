import twoSum from '../twoSum';

describe('twoSum', () => {
  it('should return the indices of two numbers that add up to the target', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const expected = [0, 1];
    const result = twoSum(nums, target);
    expect(result).toEqual(expected);
  });
  describe('twoSum', () => {
    it('should return the indices of two numbers that add up to the target', () => {
      const nums = [2, 7, 11, 15];
      const target = 9;
      const expected = [0, 1];
      const result = twoSum(nums, target);
      expect(result).toEqual(expected);
    });

    it('should return null if no two numbers sum up to the target', () => {
      const nums = [1, 2, 3, 4];
      const target = 10;
      const result = twoSum(nums, target);
      expect(result).toBeNull();
    });

    it('should handle negative numbers', () => {
      const nums = [-1, -2, -3, -4, 5];
      const target = 1;
      const expected = [3, 4];
      const result = twoSum(nums, target);
      expect(result).toEqual(expected);
    });

    it('should handle array with one element', () => {
      const nums = [5];
      const target = 5;
      const result = twoSum(nums, target);
      expect(result).toBeNull();
    });
    it('should return indices of two numbers that add up to the target', () => {
      const nums = [1, 3, 4, 2];
      const target = 6;
      const expected = [2, 3];
      const result = twoSum(nums, target);
      expect(result).toEqual(expected);
    });
  });


});
