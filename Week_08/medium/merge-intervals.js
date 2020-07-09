// 56. 合并区间
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (!intervals || intervals.length === 0) {
        return [];
    }

    // 关键步骤，先排序
    intervals.sort((v1, v2) => v1[0] - v2[0]);

    const res = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        if (res[res.length - 1][1] >= intervals[i][0]) {
            // 区间有重合，更新结果值，取较大的结尾数字
            res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1]);
        } else {
            res.push(intervals[i]);
        }
    }

    return res;
};