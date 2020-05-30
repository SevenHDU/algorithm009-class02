/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let map = {};
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }
    }
    for (let j = 0; j < t.length; j++) {
        let key = t[j];
        if (!map[key]) {
            return false;
        }
        map[key]--;
    }

    return true;
};