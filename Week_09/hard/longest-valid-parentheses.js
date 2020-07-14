// 32. 最长有效括号
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let max = 0;
    let left = 0;
    let right = 0;    
    for (let i = 0; i < s.length; i++) {
        const c = s[i];

        if (c === '(') {
            left++;
        } else {
            right++;
        }

        if (left === right) {
            max = Math.max(max, left * 2);
        } 

        if (right > left) {
            left = right = 0;
        }
    }

    left = right = 0; 
    for (let i = s.length - 1; i >= 0; i--) {
        const c = s[i];

        if (c === '(') {
            left++;
        } else {
            right++;
        }

        if (left === right) {
            max = Math.max(max, left * 2);
        } 

        if (right < left) {
            left = right = 0;
        }
    }

    return max;
};