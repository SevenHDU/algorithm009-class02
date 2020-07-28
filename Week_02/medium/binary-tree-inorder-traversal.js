// 94 二叉树的中序遍历
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
var inorderTraversal = function(root) {
    // 递归
    const ans = [];
    function inOrder(root) {
        if (root) {
            inOrder(root.left);
            ans.push(res.val);
            inOrder(root.right);
        }
    }

    inOrder(root);

    return ans;

    // 迭代
    if (!root) {
        return [];
    }
    const res = [];
    const nodeList = [];
    let node = root;

    while(node) {
        nodeList.push(node);
        node = node.left;
    }

    while(nodeList.length) {
        let node = nodeList.pop();
        res.push(node.val);

        if (node.right) {
            let tempNode = node.right;
            while(tempNode) {
                nodeList.push(tempNode);
                tempNode = tempNode.left;
            }
        }
    }

    return res;
};