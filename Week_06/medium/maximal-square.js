// 221. 最大正方形
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) return 0;
    const dp = [];
    const row = matrix.length;
    const col = matrix[0].length;

    for (let i = 0; i < row + 1; i++) {
        if (i === 0) {
            dp[i] = Array(col + 1).fill(0);
        } else {
            dp[i] = [0];
        }
    }

    let maxSide = 0;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] === '1') {
                dp[i+1][j+1] = Math.min(dp[i][j + 1], dp[i][j], dp[i + 1][j]) + 1;
                maxSide = Math.max(dp[i + 1][j + 1], maxSide);
            } else {
                dp[i + 1][j + 1] = 0;
            }
        }
    }

    return maxSide * maxSide;
};