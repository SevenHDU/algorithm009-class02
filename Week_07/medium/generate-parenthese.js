// 22. 括号生成
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];

    function gen(left, right, count, s) {
        if (left === count && right === count) {
            res.push(s);
            return ;
        }

        if (left < count) {
            gen(left + 1, right, count, s + '(');
        }

        if (right < left) {
            gen(left, right + 1, count, s + ')');
        }
    }

    gen(0, 0, n, '');

    return res;
};