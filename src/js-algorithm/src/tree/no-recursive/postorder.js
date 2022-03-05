//非递归实现中序遍历(用技巧：先反向(根、右、左)输出，然后利用栈后进先出的原则，实现正向输出后序顺序)

const bt = require('../bt')

const postOrder = (root) => {

  const stack = [root]
  const reverseStack = []
  while (stack.length) {
    const node = stack.pop()
    reverseStack.push(node.val)
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
  }
  while (reverseStack.length) {
    const node = reverseStack.pop()
    console.log(node)
  }
}

postOrder(bt)