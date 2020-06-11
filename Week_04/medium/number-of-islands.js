// 岛屿数量
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const row = grid.length;
    if (row === 0) {
        return 0;
    }
    
    const column = grid[0].length;
    const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const queue = [];
    let islandNum = 0;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (grid[i][j] === '1') {
                islandNum++;
                grid[i][j] = '0';
                queue.push({
                    x: j,
                    y: i
                });

                while (queue.length) {
                    const item = queue.shift();
                    for (let k = 0; k < 4; k++) {
                        const newX = item.x + direction[k][0];
                        const newY = item.y + direction[k][1];
                        if (newX >= 0 && newX < column && newY >= 0 && newY < row && grid[newY][newX] === '1') {
                            grid[newY][newX] = '0';
                            queue.push({
                                x: newX,
                                y: newY
                            });
                        }
                    }
                }
            }
        }
    }

    return islandNum;
};