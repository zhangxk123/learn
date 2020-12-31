/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	let val = nums[0];
	let size = 1;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] == val) {
      nums.splice(i,1);
		} else {
			size++;
			val = nums[i];
		}
	}
	return size;
};

// let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let arr = [1,1,2];
removeDuplicates(arr);
console.log(arr);
