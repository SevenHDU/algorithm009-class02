// 874. 模拟行走机器人
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    let dir = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];

    let obstaclesSet = new Set();

    for (let item of obstacles) {
        obstaclesSet.add(item[0] + '-' + item [1]);
    }

    let res = 0;

    let d = 0;
    let x = 0;
    let y = 0;

    for (let i = 0 ; i < commands.length; i++) {
        const command = commands[i];
        if (command === -1) {
            d = (d + 1) % 4;
        } else if (command === -2) {
            d = (d + 3) % 4;
        } else {
            let step = command;
            while(step > 0 && !obstaclesSet.has((x + dir[d][0]) + '-' + (y + dir[d][1]))) {
                x += dir[d][0];
                y += dir[d][1];
                step--;
            }

            res = Math.max(res, x * x + y * y);
        }
    }

    return res;
};