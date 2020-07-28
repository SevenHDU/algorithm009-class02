// 144. 二叉树的前序遍历
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    // 递归
    const ans = [];
    function preOrder(root) {
        if (root) {
            ans.push(root.val);
            preOrder(root.left);
            preOrder(root.right);
        }
    }

    preOrder(root);

    return ans;

    // 迭代
    // if (!root) {
    //     return [];
    // }

    // const ans = [];
    // const stack = [];
    // stack.push(root);

    // while (stack.length) {
    //     const node = stack.pop();
    //     ans.push(node.val);

    //     if (node.right) {
    //         stack.push(node.right);
    //     }
    //     if (node.left) {
    //         stack.push(node.left);
    //     }
    // }

    // return ans;
};