/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let number = 0;
  const length = prices.length;
  for (let i = 0; i < length; i++) {
    if (prices[i] < prices[i + 1]) {
      number += prices[i + 1] - prices[i];
    }
  }
  return number;
};
