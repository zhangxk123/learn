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

export { bigIntSum };
