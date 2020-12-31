/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	const map = {
		IV: 4,
		IX: 9,
		XL: 40,
		XC: 90,
		CD: 400,
		CM: 900,
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	let res = 0,
		val = "";
	while (s != "") {
		val = s.substr(0, 2);
		if (val in map) {
			res += map[val];
			s = s.substr(2);
		} else {
			val = s.substr(0, 1);
			res += map[val];
			s = s.substr(1);
		}
	}
	return res;
};
// romanToInt("III") // 3
// romanToInt("IV") // 4
// romanToInt("IX") // 9
// romanToInt("LVIII") // 58
// romanToInt("MCMXCIV"); // 1994
