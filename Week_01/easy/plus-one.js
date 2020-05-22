/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) { 
   //先遍历 从右向左
   for (let i = digits.length - 1;i >= 0; i--) {
        if (digits[i] !== 9) {
            digits[i]++;
            return digits;
        } else {
            // 是 9, 加 1，当前为是 0
            digits[i] = 0
        }
    }

    digits.unshift(1);
    return digits;
}