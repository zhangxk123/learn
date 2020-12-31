/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	let res = "";
	function inner(arr) {
		if (Math.min(...arr) == Math.max(...arr)) {
			res += arr[0];
		}
	}
	for (let i = 0; i < 10; i++) {
		inner(strs.map(str => str[i]));
	}
	return res;
};

//test
let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
