// N叉树的层序遍历
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    let res = [];
    let queue = [root];

    while(queue.length) {
        const size = queue.length;
        let level = [];
        for (let i = 0; i < size; i++) {
            let item = queue.shift();
            level.push(item.val);
            if (item.children) {
                for (let j = 0; j < item.children.length; j++) {
                    queue.push(item.children[j]);
                }
            }
        }

        res.push(level);
    }

    return res;
};