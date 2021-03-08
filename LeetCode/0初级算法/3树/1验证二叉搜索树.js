// 一个二叉搜索树具有如下特征：

// 节点的左子树只包含小于当前节点的数。
// 节点的右子树只包含大于当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。

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
 * @return {boolean}
 */
var isValidBST = function(root) {
  const helper=(root,min,max)=>{
    if(root==null){
      return true
    }
    if(root.val>=max||root.val<=min){
      return false
    }
    return helper(root.left,min,root.val)&&helper(root.right,root.val,max)
  };
  return helper(root,Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)
};