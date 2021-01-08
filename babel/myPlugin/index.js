const SUBTRACTION = "-";
module.exports = function ({ types: t }) {
	return {
		// 准备工作
		// pre(state) {},
		visitor: {
			UnaryExpression(path, state) {
				if (
					path.node.operator == SUBTRACTION &&
					t.isMemberExpression(path.parent) &&
					t.isIdentifier(path.parent.object)
				) {
					const obj = path.parent.object.name;
					const index = path.node.argument.value;
					path.replaceWith(
						t.binaryExpression(
							"-",
							t.memberExpression(t.identifier(obj), t.identifier("length")),
							t.numericLiteral(index)
						)
					);
				}
			},
		},
		// 收尾工作
		// post(state) {},
	};
};
