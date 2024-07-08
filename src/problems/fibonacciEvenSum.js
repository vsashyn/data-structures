export const fibonacciEvenSum = (maxN) => {
  let sum = 0;
  let elems = [1, 1];
  while (elems[elems.length - 1] + elems[elems.length - 2] <= maxN) {
    elems.push(elems[elems.length - 1] + elems[elems.length - 2]);
  }
  console.log(elems);
  for (let el of elems) {
    if (el % 2 === 0) {
      sum += el;
    }
  }
  return sum;
};
