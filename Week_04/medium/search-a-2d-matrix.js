// 74. 搜索二维矩阵
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix || matrix.length === 0)  {
        return false;
    }
    const m = matrix.length;
    const n = matrix[0].length;

    let left = 0;
    let right = m * n -1;

    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        const val = matrix[parseInt(mid / n)][mid % n];
        if (target === val) {
            return true;
        } if (target > val) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
};
