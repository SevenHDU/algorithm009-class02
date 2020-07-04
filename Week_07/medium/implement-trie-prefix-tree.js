// 208. 实现 Trie (前缀树)
function TrieNode(val) {
    this.val = val;
    this.children = [];
    this.isWord = false;
}

/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = new TrieNode(null);
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    
    for (let i = 0; i < word.length; i++) {
        const c = word[i];
        if (!node.children[c]) {
            node.children[c] = new TrieNode(c);
        }

        node = node.children[c];
    }

    node.isWord = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;
    
    for (let i = 0; i < word.length; i++) {
        const c = word[i];
        if (!node.children[c]) {
            return false;
        }

        node = node.children[c];
    }

    return node.isWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    
    for (let i = 0; i < prefix.length; i++) {
        const c = prefix[i];
        if (!node.children[c]) {
            return false;
        }

        node = node.children[c];
    }

    return true;
};