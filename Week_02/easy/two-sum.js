// 1. 两数之和
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashTable = {};
    for (let i = 0; i < nums.length; i++) {
        if (hashTable[target - nums[i]] > -1){
            return [hashTable[target - nums[i]], i];
        }

        hashTable[nums[i]] = i;
    }

    return [];
};