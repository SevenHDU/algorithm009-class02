// 387. 字符串中的第一个唯一字符
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const hashTable = [];
    for (let i = 0; i < s.length; i++) {
        const key = s[i].charCodeAt() - 'a'.charCodeAt();
        hashTable[key] = (hashTable[key] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        const key = s[i].charCodeAt() - 'a'.charCodeAt();
        if (hashTable[key] === 1) {
            return i;
        }
    }

    return -1;
};