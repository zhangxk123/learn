// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	let map = {
		")": "(",
		"]": "[",
		"}": "{",
	};
	let isEnd = s => [")", "]", "}"].includes(s);
	let stacks = [];
	let str = "";
	if (s == "") {
		return true;
	}
	for (let i = 0, len = s.length; i < len; i++) {
		str = s[i];
		if (isEnd(str) && map[str] != stacks.pop()) {
			return false;
		}
		if (!isEnd(str)) {
			stacks.push(str);
		}
	}
	if (stacks.length == 0) {
		return true;
	} else {
		return false;
	}
};

console.log(isValid(""));
console.log(isValid("()[]{}"));
console.log(isValid("([{}])"));
console.log(isValid("(]"));
console.log(isValid("["));
