export let a = 1;
export const add = b => {
	return (a = a + b);
};
export const getA = () => {
	return a;
};
setTimeout(() => {
  console.log(`异步后的a`,a);
}, 0);