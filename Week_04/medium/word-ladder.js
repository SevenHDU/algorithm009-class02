// 127. 单词接龙
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) {
        return 0;
    }

    const visted = [];
    const queue = [];
    const idx = wordList.indexOf(beginWord);
    if (idx !== -1) {
        visted[idx] = true;
    }
    let count = 0;

    queue.push(beginWord);

    while(queue.length) {
        const size = queue.length;
        count++;

        for (let i = 0; i < size; i++) {
            const curWord = queue.shift();
            for(let j = 0; j < wordList.length; j++) {
                const word = wordList[j];
                if (visted[j]) {
                    continue;
                }

                if (!canConvertWord(curWord, word)) {
                    continue;
                }

                if (word === endWord) {
                    return count + 1;
                }

                visted[j] = true;
                queue.push(word);
            }
        }
    }

    return 0;
};

function canConvertWord(word1, word2) {
    let count = 0;
    for(let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
            count++;
            if (count > 1) {
                return false;
            }
        }
    }

    return count === 1;
}