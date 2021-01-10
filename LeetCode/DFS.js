
const tree=[{
  path:'0',
  children:[{
    path:'1',
    children:[{
      path:'11',
      children:[{
        path:'111',
      }]
    },{
      path:'12',
    },{
      path:'13',
      children:[{
        path:'131',
        children:[{
          path:'1311',
          children:[{
            path:'13111',
          }]
        }]
      }],
    }]
  },{
    path:'2',
    children:[{
      path:'21',
      children:[{
        path:'211'
      }]
    }]
  }]
}]
// 深度遍历 利用堆栈特性回溯访问过的节点
function dfs(nodes,fn) {
  if(nodes&&nodes.length){
    for (let node of nodes){
      fn(node)
      if(node.children){
        dfs(node.children,fn)
      }
    }
  }
}

let res=[]
dfs(tree,(item)=>{
  res.push({
    path:item.path
  })
})
console.log(res);

