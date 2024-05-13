/**
 * 121. Best Time to Buy and Sell Stock
 *
 * Every minimum value creates a new segment to find highest price.
 *
 * Time complexity: O(n)
 * Space complexity: O()
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxCap = 0;
  let segment = {
    min: prices[0],
    max: prices[0],
  };
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < segment.min) {
      segment = {
        min: prices[i],
        max: prices[i],
      };
    } else {
      if (prices[i] > segment.max) {
        segment.max = prices[i];
      }
      if (segment.max - segment.min > maxCap) {
        maxCap = segment.max - segment.min;
      }
    }
  }
  return maxCap;
};
