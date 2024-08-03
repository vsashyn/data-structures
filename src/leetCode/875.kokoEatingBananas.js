/**
 * @param {number[]} piles
 * @param {number} h - hours
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  function getTime(piles, speed) {
    let total = 0;
    for (let i = 0; i < piles.length; i++) {
      total += Math.ceil(piles[i] / speed);
    }
    return total;
  }
  let totalBananas = piles.reduce((acc, p) => {
    acc += p;
    return acc;
  }, 0);

  let left = Math.ceil(totalBananas / h);

  let right = piles[0];

  piles.forEach((p) => {
    if (p > right) {
      right = p;
    }
  });
  let result = left;
  // Binary search
  while (left <= right) {
    let speed = Math.floor((right + left) / 2);
    let newTime = getTime(piles, speed);
    // if original time is bigger, let's try to decrease spead once more
    if (h >= newTime) {
      right = speed - 1;
      result = speed;
    }
    if (h < newTime) {
      left = speed + 1;
    }
  }
  return result;
};
