// 全排列 II
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = [];
    const count = nums.length;
    const used = {};
    let path = [];
    nums.sort((a, b) => a - b);

    function backtrack(path , used) {
        if (path.length === count) {
            res.push(path.slice());
            return ;
        }

        for (let i = 0; i < count; i++) {
            if (!!used[i]) {
                continue;
            }

            if (i > 0 && nums[i - 1] === nums[i] && !!used[i - 1] === false) {
                continue;
            }

            used[i] = true;
            path.push(nums[i]);
            backtrack(path, used);

            used[i] = false;
            path.pop();
        }
    }

    backtrack(path, used);

    return res;
};