// 122 买卖股票 II
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices || prices.length < 1) {
        return 0;
    }
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        let price = prices[i] - prices[i - 1];
        if (price > 0) {
            profit += price;
        }
    }

    return profit;
};