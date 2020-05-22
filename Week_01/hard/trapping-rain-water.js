// 接雨水
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let capacity = 0;
    const stack = [];

    for (let i = 0; i < height.length; i++) {
        while(stack.length !== 0 && height[stack[stack.length - 1]] < height[i]) {
            let cur = stack[stack.length - 1];
            stack.pop();
            if (stack.length === 0) {
                break;
            }
            let l = stack[stack.length - 1];
            let r = i;
            capacity += (Math.min(height[l], height[r]) - height[cur]) * (r - l - 1);
        }

        stack.push(i);
    }

    return capacity;
};