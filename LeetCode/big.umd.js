(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.utils = {}));
}(this, (function (exports) { 'use strict';

	function bigIntSum(a, b) {
		a = a.split(""); //127
		b = b.split(""); //456
		let res = "";
		let temp = false;
		while (a.length || b.length || temp) {
			const s = ~~a.pop() + ~~b.pop();
			res = ~~temp + (s % 10) + res;
			temp = s > 9;
		}
		return res;
	}

	exports.bigIntSum = bigIntSum;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
