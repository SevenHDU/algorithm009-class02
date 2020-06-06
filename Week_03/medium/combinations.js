// 77. 组合
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if (n <=0 || k <= 0 || n < k) {
        return [];
    }

    const res = [];

    function findCombination(begin, pickArr) {
        if (pickArr.length === k) {
            res.push(pickArr.slice(0));
            return ;
        }

        for (let i = begin; i <= n ; i++) {
            pickArr.push(i);
            findCombination(i + 1, pickArr);
            pickArr.pop();
        }
    }

    findCombination(1, []);

    return res;
};