// 字母异位词分组
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    let res = [];
    let index = 0;
    for (let i = 0; i < strs.length; i++) {
        let sortStr = getSortStr(strs[i]);
        if (map.has(sortStr)) {
            let sortIndex = map.get(sortStr);
            res[sortIndex].push(strs[i]);
        } else {
            res[index] = [];
            res[index].push(strs[i]);
            map.set(sortStr, index++);
        }
    }
    
    return res;
};

function getSortStr(str) {
    return str.split('').sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
}