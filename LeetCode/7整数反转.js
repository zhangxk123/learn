// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	let result = 0;
	while (x !== 0) {
		result = result * 10 + (x % 10);
		x = (x / 10) | 0;
	}
	return (result | 0) === result ? result : 0;
};
var reverse2 = function (x) {
	const isz = x >= 0 ? 1 : -1;
	let res = 0;
	if (isz == -1) {
		x = Math.abs(x);
	}
	res = [].reverse.call((x + "").split("")).join("");
	res = res * isz;
	return (res | 0) === res ? res : 0;
};

console.log(reverse(0));
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(123456789));
