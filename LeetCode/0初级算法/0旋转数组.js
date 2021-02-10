// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  while(k--){
      nums.unshift(nums.pop())
  }
};