/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) { 
    let slow = 0;
    let fast = 0;
    const count = nums.length;

    for (; fast < count; fast++) {
        if (nums[fast] != 0) {
            nums[slow] = nums[fast];
            if (fast !== slow) {
                nums[fast] = 0;
            }
            slow++;
        }
    }
}