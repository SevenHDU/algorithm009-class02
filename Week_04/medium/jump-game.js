// 55. 跳跃游戏
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let farthest = 0;
    if (nums.length <= 1) {
        return true;
    }

    for (let i = 0; i < nums.length && i <= farthest; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        if (farthest >= nums.length - 1) {
            return true;
        }
    }

    return false;
};