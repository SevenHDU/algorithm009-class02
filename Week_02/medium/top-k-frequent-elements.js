// 347. 前 K 个高频元素
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    let arr = [...new Set(nums)];
    nums.map((num) => {
        if(map.has(num)) {
            map.set(num, map.get(num)+1)
        } else {
            map.set(num, 1)
        }
    })
    
    // 根据频次，倒序排列，取前 k 个
    return arr.sort((a, b) => map.get(b) - map.get(a)).slice(0, k);
};