/**
 * 121. Best Time to Buy and Sell Stock
 *
 * Every time we find lower price to buy, we update it.
 * Then we compare profit with new range.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let buy = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
    } else {
      profit = Math.max(profit, prices[i] - buy);
    }
  }
  return profit;
};
