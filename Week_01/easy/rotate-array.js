// 旋转数组
// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
// example: 
/**
 * 输入: [1,2,3,4,5,6,7] 和 k = 3
 * 输出: [5,6,7,1,2,3,4]
 */
var rotate = function(nums, k) {
    const count = nums.length;
    k = k % count;
    reverse(nums, 0, count - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, count - 1);
};

function reverse(nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}