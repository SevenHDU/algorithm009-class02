/*
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const length = s.length;

    if (length === 0) {
        return 0;
    }

    const dp = Array(length).fill(0);

    for (let i = 1; i < length; i++) {
        if (s[i] === ')' && i - dp[i - 1] - 1 >= 0 &&
            s[i - dp[i - 1] - 1] === '(') {
            dp[i] = dp[i - 1] + ((i - dp[i - 1] >= 2) ? dp[i - dp[i - 1] - 2] : 0) + 2;
        }
    }

    return Math.max(...dp);
};