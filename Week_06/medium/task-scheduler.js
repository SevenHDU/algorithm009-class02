// 621. 任务调度器
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const arr = Array(26).fill(0);
    
    // 记录各个任务的执行个数
    for (let i = 0; i < tasks.length; i++) {
        const key = tasks[i].charCodeAt() - 'A'.charCodeAt();
        arr[key]++;
    }

    // 根据任务数量大小，倒序排列
    arr.sort((a, b ) => b - a);
    let maxCount = arr[0];
    let max = (n + 1) * (maxCount - 1) + 1;
    let i = 1;

    // 如果有相同的最大值的任务，则时间需要 + 1;
    while (i < tasks.length && arr[i] === maxCount) {
        max++;
        i++;
    }

    // 如果任务种类比较多，冷却时间无法执行完，最任务数量就是最大耗时量
    return Math.max(tasks.length, max);
};