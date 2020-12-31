const { type } = require("os");

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
	let arr = Array.from(x + "");
	const l = arr.length;
	const middle = Math.floor((l + 1) / 2);
	let i = 0;
	while (i < middle) {
		if (arr[i] == arr[l - 1 - i]) {
			i++;
		} else {
			return false;
		}
	}
	return true;
};
var isPalindrome2 = function (x) {
	x = x + "";
	return [].reverse.call(x.split("")).join("") === x;
};

console.log(isPalindrome(121), isPalindrome(-121), isPalindrome(10));
