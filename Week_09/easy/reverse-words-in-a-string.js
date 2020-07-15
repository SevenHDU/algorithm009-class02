// 151. 翻转字符串里的单词
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').filter(v => v !== '').reverse().join(' ');
};