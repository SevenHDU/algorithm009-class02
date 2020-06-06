// 二叉树的最近公共祖先
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root || root.val === p.val || root.val === q.val) {
        return root;
    }

    const leftTree = lowestCommonAncestor(root.left, p, q);
    const rightTree = lowestCommonAncestor(root.right, p, q);

    if (leftTree && rightTree) {
        return root;
    } else if (leftTree) {
        return leftTree;
    } else {
        return rightTree;
    }
};