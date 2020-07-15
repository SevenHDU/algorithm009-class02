// 300. 最长上升子序列
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }

    let res = 1;
    const count = nums.length;
    // 状态定义， dp[i] 表示第 nums[i] 结尾的最长上升子序列值 (第 i 位的数字必须选择)
    const dp = Array.from(Array(count).fill(1));

    for (let i = 0; i < count; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        res = Math.max(res, dp[i]);
    }

    return res;
};