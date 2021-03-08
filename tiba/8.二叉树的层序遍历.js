/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 *
 * @param root TreeNode类
 * @return int整型二维数组
 */
function levelOrder(root) {
	// write code here
	let res = []; //二维数组
	let queue = [root]; //队列
	let list = []; //列表
	if (root == null) {
		return res;
	}
  //每个节点的遍历
	while (queue.length > 0) {
		list = [];
    //每一层的遍历
        let size=queue.length;
		while (size--) {
			const t = queue.shift();
            list.push(t.val);
			if (t.left != null) {
				queue.push(t.left);
			}
			if (t.right != null) {
				queue.push(t.right);
			}
		}
        res.push(list);
	}
	return res;
}

module.exports = {
	levelOrder: levelOrder,
};
