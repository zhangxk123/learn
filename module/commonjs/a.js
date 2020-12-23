let a = 1;
const add = b => {
	return (a = a + b);
};
const getA = () => {
	return a;
};
module.exports = {
	a,
	o: {
		a,
	},
	add,
	getA,
};
a = 2;
setTimeout(() => {
	console.log(`异步后的a`, a);
}, 0);
