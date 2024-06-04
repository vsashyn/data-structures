const reverseArray = (n) => {
  for (let i = 0; i < n.length / 2; i++) {
    let tmp = n[i];
    let oppositeInd = n.length - 1 - i;
    n[i] = n[oppositeInd];
    n[oppositeInd] = tmp;
  }
  return n;
};
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray([1, 2, 4, 5]));
