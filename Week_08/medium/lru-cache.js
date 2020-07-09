// 146. LRU缓存机制
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.data = new Map();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let val = this.data.get(key);

    if (typeof val === 'undefined') {
        return -1;
    }

    this.data.delete(key);
    this.data.set(key, val);

    return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.data.has(key)) {
        this.data.delete(key);
    }

    this.data.set(key, value);

    let keys = this.data.keys();

    while (this.data.size > this.capacity) {
        this.data.delete(keys.next().value);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */