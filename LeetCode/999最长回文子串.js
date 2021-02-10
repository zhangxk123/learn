/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	if (s.length < 2) {
		return s;
	}
	let res = "";
	let str = "";
	for (let i = 0; i < s.length; i++) {
		for (let len = s.length; len > i; len--) {
      str = s.substring(i, len);
			if (str == reverse(str)) {
				break;
			} else {
				str = "";
			}
		}
		if (str.length > res.length) {
			res = str;
		}
	}
	function reverse(str) {
		let newstr = "";
		str = str.split("");
		while (str.length) {
			newstr += str.pop();
		}
		return newstr;
	}
	return res;
};

//test

console.log(longestPalindrome("aacabdkacaa"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("ababc"));
console.log(longestPalindrome("ac"));
console.log(longestPalindrome("bb"));
