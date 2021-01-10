
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
// 广度遍历 利用队列特性 层序访问
function bfs(nodes,fn) {
  let queue=[];
  queue.push(...nodes);
  while (queue.length) {
    const first=queue.shift();
    fn(first);
    if(first.children){
      queue.push(...first.children)
    }
  }
}
let res=[]
bfs(tree,(item)=>{
  res.push({
    path:item.path
  })
})
console.log(res);

