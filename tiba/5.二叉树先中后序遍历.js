/**
 * @description 二叉树先续遍历
 * @param {*} tree
 */
var prevOrder=function (root) {
    //遍历节点函数
  function orderNodes(node,cb){
    if(node!==null){
      cb(val);
      orderNodes(node.left);
      orderNodes(node.right);
    }
  }
  //遍历回调操作
  const res=[];
  const cb=(val)=>res.push(val)
  //执行
  orderNodes(root,cb)
  return res
}
/**
 * @description 二叉树后续遍历
 * @param {*} tree
 */
var postOrder=function (tree) {
  //遍历节点函数
  function orderNodes(node,cb){
    if(node!==null){
      orderNodes(node.left);
      orderNodes(node.right);
      cb(val);
    }
  }
  //遍历回调操作
  const res=[];
  const cb=(val)=>res.push(val)
  //执行
  orderNodes(root,cb)
  return res
}
/**
 * @description 二叉树中续遍历
 * @param {*} tree
 */
var inOrder=function (tree) {
  //遍历节点函数
  function orderNodes(node,cb){
    if(node!==null){
      orderNodes(node.left);
      cb(val);
      orderNodes(node.right);
    }
  }
  //遍历回调操作
  const res=[];
  const cb=(val)=>res.push(val)
  //执行
  orderNodes(root,cb)
  return res
}