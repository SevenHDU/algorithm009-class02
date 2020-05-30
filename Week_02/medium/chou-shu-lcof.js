// 丑数
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let a = b = c = 0;
    const dp = [];
    dp[0] = 1;
    for (let i = 1; i < n; i++) {
        dp[i] = Math.min(dp[a] * 2, dp[b] * 3, dp[c] * 5);
        if (dp[i] === dp[a] * 2) a++;
        if (dp[i] === dp[b] * 3) b++;
        if (dp[i] === dp[c] * 5) c++;
    }

    return dp[n-1];
};