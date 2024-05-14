/**
 * 122. Best Time to Buy and Sell Stock II
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
 * On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
 * Find and return the maximum profit you can achieve.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfit = function (prices) {
  let buy = prices[0];
  let sell = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    // price decreased, need to sell
    if (prices[i] < sell) {
      profit = profit + sell - buy;
      buy = prices[i];
      sell = prices[i];
      continue;
    }
    // price growing, hold
    if (prices[i] >= sell) {
      sell = prices[i];
      if (i === prices.length - 1) {
        profit = profit + sell - buy;
      }
      continue;
    }
  }
  return profit;
};
