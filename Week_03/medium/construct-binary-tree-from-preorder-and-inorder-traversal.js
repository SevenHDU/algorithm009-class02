// 105. 从前序与中序遍历序列构造二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0) {
      return null;
    }
    let rootVal = preorder.shift();
    let rootNode = new TreeNode(rootVal);

    if (preorder.length === 0) {
        return rootNode;
    }

    let inIndex = inorder.indexOf(rootVal);
    let leftTreeInOrder = inorder.slice(0, inIndex);
    let rightTreeInOrder = inorder.slice(inIndex + 1);

    if (leftTreeInOrder.length >= 1 && rightTreeInOrder.length >= 1) {
        let postIndex = leftTreeInOrder.length;
        let leftTreePreorder= preorder.slice(0, postIndex);
        let rightTreePreorder = preorder.slice(postIndex);
        rootNode.left = buildTree(leftTreePreorder, leftTreeInOrder);
        rootNode.right = buildTree(rightTreePreorder, rightTreeInOrder);
    } else if (leftTreeInOrder.length >= 1) {
        rootNode.left = buildTree(preorder, leftTreeInOrder);
    } else if (rightTreeInOrder.length >=1 ) {
        rootNode.right = buildTree(preorder, rightTreeInOrder);
    }

    return rootNode;
};