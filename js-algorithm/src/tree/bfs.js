//广度优先遍历

const tree={
  val:'a',
  children:[{
    val:'b',
    children:[{
      val:'d',
      children:[]
    },{
      val:'e',
      children:[]
    }]
  },{
    val:'c',
    children:[{
      val:'f',
      children:[]
    },{
      val:'g',
      children:[]
    }]
  }]
}

const bfs=(root)=>{
  const q=[root]
  while(q.length>0){
    const node=q.shift()
    console.log(node.val)
    node.children.forEach(child => {
      q.push(child)
    });
  }
}

bfs(tree)