// 5. 最长回文子串
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const length = s.length;

    if (length < 2) {
        return s;
    }

    let maxLength = 1;
    let begin = 0;

    for (let i = 0; i < 2 * length - 1; i++) {
        let left = Math.floor(i / 2);
        let right = left + (i % 2 ? 0 : 1);

        while (left >= 0 && right < length && s[left] === s[right]) {
            left--;
            right++;
        }

        if (right - left - 1 > maxLength) {
            begin = left + 1;
            maxLength = right - left - 1;
        }
    }

    return s.substr(begin, maxLength);
};