//非递归实现中序遍历

const bt = require('../bt')

const inOrder = (root) => {

  if (!root) {
    return;
  }

  const stack = []
  let p = root
  while (stack.length || p) {

    while (p) {
      stack.push(p)
      p = p.left
    }
    const node = stack.pop()
    console.log(node.val)
    p = node.right
  }
}

inOrder(bt)