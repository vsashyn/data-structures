/**
 * Even numbers are every 3rd number in a fibonacci row. To optimize it, we can count only even numbers.
 * @param {*} maxN MaxN that should not be exceeded
 * @returns sum of even numbers
 */
export const fibonacciEvenSum = (maxN) => {
  if (maxN < 2) return 0;
  let a = BigInt(1);
  let b = BigInt(1);
  let sum = BigInt(0);
  while (a + b <= maxN) {
    let even = a + b;
    sum += BigInt(even);
    a = even + b;
    b = even + a;
  }
  return sum.toString();
};
