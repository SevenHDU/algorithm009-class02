// 529. 扫雷游戏
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    const row = board.length;
    const column = board[0].length;
    const [x, y] = click;
    // 8 个方向
    const dirs = [
        [-1, -1],
        [0, -1],
        [1, -1],
        [1, 0],
        [1, 1],
        [0, 1],
        [-1, 1],
        [-1, 0]
    ];

    dfs(board, x, y);

    function dfs(board, x, y) {
        if (board[x][y] === 'M') {
            board[x][y] = 'X';
            return ;
        }

        if (board[x][y] === 'E') {
            board[x][y] = 'B';
            const count = getMinieCount(board, x, y)
            if (count === 0) {
                for (let i = 0; i < 8; i++) {
                    const newX = x + dirs[i][0];
                    const newY = y + dirs[i][1];
                    if (newX < 0 || newX >= row || newY < 0 || newY >= column) {
                        continue;
                    }
                    dfs(board, newX, newY);
                }
            } else {
                board[x][y] = count.toString();
            }
        }
    }

    function getMinieCount(board, x, y) {
        let count = 0;
        for (let i = 0; i < 8; i++) {
            const newX = x + dirs[i][0];
            const newY = y + dirs[i][1];
            if (newX < 0 || newX >= row || newY < 0 || newY >= column) {
                continue;
            }

            if (board[newX][newY] === 'M') {
                count++;
            }
        }

        return count;
    }

    return board;
};