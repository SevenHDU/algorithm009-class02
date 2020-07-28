/*
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    // 动态规划法
    const length = s.length;

    if (length === 0) {
        return 0;
    }

    // 状态定义：dp[i] 以索引 i 结尾的字符的最大有效括号数量
    const dp = Array(length).fill(0);

    for (let i = 1; i < length; i++) {
        if (s[i] === ')' && i - dp[i - 1] - 1 >= 0 &&
            s[i - dp[i - 1] - 1] === '(') {
            dp[i] = dp[i - 1] + ((i - dp[i - 1] >= 2) ? dp[i - dp[i - 1] - 2] : 0) + 2;
        }
    }

    return Math.max(...dp);
};

var longestValidParentheses2 = function(s) {
    // 从左到右，从右到左，双向扫描法
    if (!s || s.length === 0) {
        return 0;
    }

    let max = 0;
    let left = 0;
    let right = 0;
    let count = s.length;

    for (let i = 0; i < count; i++) {
        let c = s[i];

        if (c === '(') {
            left++;
        } else {
            right++;
        }

        if (left === right) {
            max = Math.max(max, left * 2);
        }

        if (right > left) {
            left = right = 0;
        }
    }

    left = right = 0;

    for (let j = count - 1; j >= 0; j--) {
        let c = s[j];
        if (c === ')') {
            right++;
        } else {
            left++;
        }

        if (left === right) {
            max = Math.max(max, left * 2);
        }

        if (left > right) {
            left = right = 0;
        }
    }

    return max;
};