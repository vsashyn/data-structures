import {isPalindrome, isPalindrome2, isPalindrome3} from "../palindromeNumber";

describe('palindromeNumber', () => { 
  it('isPalindrome using convertion to String', () => {
    expect(isPalindrome(1)).toBe(true);
    expect(isPalindrome(101)).toBe(true);
    expect(isPalindrome(100)).toBe(false);
    expect(isPalindrome(-101)).toBe(false);
    expect(isPalindrome(-101)).toBe(false);
  })
  
  it('isPalindrome2 using check half a number', () => {
    expect(isPalindrome2(1)).toBe(true);
    expect(isPalindrome2(1221)).toBe(true);
    expect(isPalindrome2(101)).toBe(true);
    expect(isPalindrome2(100)).toBe(false);
    expect(isPalindrome2(-101)).toBe(false);
    expect(isPalindrome2(-101)).toBe(false);
    expect(isPalindrome2(-101)).toBe(false);
  })
  it('isPalindrome3 using full number reverse', () => {
    expect(isPalindrome3(1)).toBe(true);
    expect(isPalindrome3(1221)).toBe(true);
    expect(isPalindrome3(101)).toBe(true);
    expect(isPalindrome3(100)).toBe(false);
    expect(isPalindrome3(-101)).toBe(false);
    expect(isPalindrome3(-101)).toBe(false);
    expect(isPalindrome3(-101)).toBe(false);
  })
 })
