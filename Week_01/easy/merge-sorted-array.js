// 合并两个有序数组
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let len1 = m - 1;
    let len2 = n - 1;
    let len = m + n -1;
    while(len1 > -1 && len2 > -1) {
        // 双指针，从后往前，将大的数据从后面塞入
        nums1[len--] = nums1[len1] < nums2[len2] ? nums2[len2--] : nums1[len1--];
    }

    for (let i = 0; i <= len2; i++) {
        nums1[i] = nums2[i];
    }
};