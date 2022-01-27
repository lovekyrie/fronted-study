//求二叉树的最大深度。
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;

  let dep = 0;
  const recursion = (node, depth) => {
    if (!node.left && !node.right) {
      dep = Math.max(dep, depth);
    }
    //遍历完左子树
    recursion(node.left, depth + 1);
    //遍历完右子树
    recursion(node.right, depth + 1);
  };

  recursion(root, 1);
  return dep;
};
