//给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(nums.length<2){
      return nums.length
  }
  let count=1;
  for(let i=1;i<nums.length;i++){
      if(nums[i]==nums[i-1]){
         continue;
      }else{
          nums[count]=nums[i];
          count++;
      }
  }
  return count
};