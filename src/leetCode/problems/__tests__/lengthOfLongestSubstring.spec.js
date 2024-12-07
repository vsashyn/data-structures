import {lengthOfLongestSubstring} from '../lengthOfLongestSubstring'

describe('lengthOfLongestSubstring', () => {
  it('returns 0 for an empty string', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });

  it('returns 1 for a string with a single character', () => {
    expect(lengthOfLongestSubstring('a')).toBe(1);
  });

  it('returns the length of the string for a string with all unique characters', () => {
    expect(lengthOfLongestSubstring('abcdefg')).toBe(7);
  });

  it('returns the length of the longest substring without repeating characters', () => {
    expect(lengthOfLongestSubstring('aab')).toBe(2);
    expect(lengthOfLongestSubstring('dvdf')).toBe(3);
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });
});
