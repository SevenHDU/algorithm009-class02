// 33. 搜索旋转排序数组

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let maxValIndex = findMaxValIndex(nums);
    let maxVal = nums[maxValIndex];
    if (maxVal === target) {
        return maxValIndex;
    } else if (target >= nums[0]) {
        return binarySearch(nums, 0, maxValIndex, target);
    } else {
        return binarySearch(nums, maxValIndex + 1, nums.length - 1, target);
    }
};

function findMaxValIndex(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        if (nums[mid] > nums[mid + 1]) {
            return mid;
        } else if (nums[mid] >= nums[left]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return nums.length - 1;
}

function binarySearch(nums, left, right, target) {
    while(left <= right) {
        const mid = left + ((right - left) >> 1);
        const val = nums[mid];
        if (val === target) {
            return mid;
        } else if (val > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}
