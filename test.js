/**
 * @description 创建指定长度的非空数组
 * @param {*} len
 * @returns {*} 
 */
function createArray(len) {
	return Array.from(new Array(len), (x, i) => i);
}
/**
 * @description push
 * @param {*} a
 * @param {*} b
 */
function pushTarget(a, b) {
	a.push(...b);
}


function testHandler(len) {
	const arr1 = createArray(len);
	console.group(`5000+${len}条数据`);
	//----------------
	console.time("concat");
	arr.concat(arr1);
	console.timeEnd("concat");
	//----------------
	console.time("push");
	pushTarget(arr, arr1);
	console.timeEnd("push");
	//----------------
	console.groupEnd();
  arr&&(arr = createArray(5000))
}


let arr = createArray(5000);
testHandler(5000);
testHandler(10000);
testHandler(50000);
testHandler(100000);
testHandler(1000000);
testHandler(10000000);
