/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  if(nums.length==0){
      return -1
  }
  let sum=0;
  nums.forEach(x=>sum+=x);
  let leftSum=0;
  for(let i=0;i<nums.length;i++){
      if(sum-nums[i]-leftSum==leftSum){
          return i
      }else{
          leftSum+=nums[i];
      }
  }
  return -1
};