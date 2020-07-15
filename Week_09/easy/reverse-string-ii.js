// 541. 反转字符串 II
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const length = s.length;
    let i = 0;
    const sArr = s.split('');
    for (i = 0 ; i < length; i += 2*k) {
        reverse(i, i + k - 1);
    }

    function reverse(start, end) {
        if (end > length ) {
            end = length - 1;
        }
        while (start < end) {
            let temp = sArr[start];
            sArr[start] = sArr[end];
            sArr[end] = temp;
            start++;
            end--;
        }
    }

    return sArr.join('');
};