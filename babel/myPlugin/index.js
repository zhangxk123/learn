// 通过key值防止重复
let dulplicationKey = null;
function addDebuggerToDebugCommentLine(path,opts) {
  const node = path.node;
  console.log(node);
	if (hasLeadingComments(node)) {
		// 遍历所有的前缀注释
		node.leadingComments.forEach(comment => {
			const content = comment.value;
			// 检测该key值与防重复key值相同
			if (path.key === dulplicationKey) {
				return;
			}
			// 检测注释是否符合debug模式
			if (!isDebugComment(content)) {
				return;
			}
			// 传入参数，插入调试代码
			doIt(opts.text)
		});
	}
	if (hasTrailingComments(node)) {
		// 遍历所有的后缀注释
		node.trailingComments.forEach(comment => {
			const content = comment.value;
			// 检测注释是否符合debug模式
			if (!isDebugComment(content)) {
				return;
			}
			// 防止下一个sibling节点重复遍历注释
			dulplicationKey = path.key + 1;
			// 传入参数，插入调试代码
			doIt(opts.text)
		});
	}
}
function doIt(content) {
  console.log(content);
  path.insertBefore(content);
}
function isDebugComment(content) {
  return content.indexOf("@debugger")!=-1
}
function hasTrailingComments(node) {
  console.log(typeof node.trailingComments);
	return typeof node.trailingComments != undefined;
}
function hasLeadingComments(node) {
  console.log(typeof node.leadingComments);
	return typeof node.leadingComments != undefined;
}

module.exports = function ({ types: t }) {
	return {
		// 准备工作
		pre(state) {},
		visitor: {
			// "Expression|Statement|Function":{
      Identifier:{
        enter(path,state) {
          // const { trailingComments, innerComments, leadingComments } = node;
          addDebuggerToDebugCommentLine(path,state.opts);
          // 添加其它的处理方法……
        },
        exit(path) {},
      }
		},
		// 收尾工作
		post(state) {},
	};
};
