//  删除排序数组中的重复项
var removeDuplicates = function(nums) {
    if (!nums || nums.length === 1) {
        return nums.length;
    }

    let i = 0;
    let j = 1;
    for ( ; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            nums[++i] = nums[j];
        }
    }

    return i + 1;
};