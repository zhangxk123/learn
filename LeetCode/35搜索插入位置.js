/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let index=nums.indexOf(target)
  if(index!=-1){
      return index
  }
  for(let i=0;i<nums.length;i++){
      if(target<nums[i]){
          return i
      }
  }
  return nums.length
};
const res=searchInsert([1,3,5,6],7)
console.log(res);