//非递归实现先序

const bt = require('../bt')

const preOrder = (root) => {
  if (!root) {
    return
  }
  const stack = [root]
  while (stack.length) {
    const node = stack.pop()
    console.log(node.val)
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }
}

preOrder(bt)