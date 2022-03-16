// 二叉树中序遍历
/**
 *
 * 1. 访问二叉树的左子树
 * 2. 访问根节点
 * 3. 访问 二叉树的右子树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]} 
 */
var inorderTraversal = function (root, arr = []) {
  if (root) {
    if (root.left) {
      inorderTraversal(root.left);
    }
    arr.push(root.val);
    if (root.right) {
      inorderTraversal(root.right);
    }
    return arr;
  }
};

var inorderTraversalNoRecursive = function(root) {
  let current = root;
  const result = [], stack = [];

  while (current || stack.length>0) {
    while (current) {
      stack.push(current)
      current = current.left
    }
    current = stack.pop()
    result.push(current.val)
    current = current.right
  }

  return result
}