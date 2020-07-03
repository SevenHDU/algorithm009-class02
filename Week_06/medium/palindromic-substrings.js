// 647. 回文子串
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    if (!s || s.length === 0) {
        return 0;
    }

    let count = 0;

    // 中心扩散法，找出中心点，朝两边扩散，中心点可能是1个，也可能是2个
    for (let center = 0; center < 2 * s.length - 1; center++) {
        let left = Math.floor(center / 2);
        let right = left + center % 2;

        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
            count++;
        }
    }

    return count;
};