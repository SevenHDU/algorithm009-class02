/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    let res = [];

    function preOrder(root) {
        if (root) {
            res.push(root.val);
            for(let i = 0; i < root.children.length; i++) {
                preOrder(root.children[i]);
            }
        }
    }

    preOrder(root);

    return res;
};