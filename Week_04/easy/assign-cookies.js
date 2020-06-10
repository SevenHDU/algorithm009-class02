// 455 分发饼干
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let gCount = g.length;
    let sCount = s.length;
    let i = j = 0;

    for (; i < sCount; i++) {
        if (s[i] >= g[j]) {
            j++;
            if (j === gCount) {
                return gCount;
            }
        }
    }

    return j;
};