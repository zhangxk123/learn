

/**
 * @description 使用es6的map
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map=new Map();
  let res=[];
  nums.forEach((v,index)=>{
    map.set(v,index)
  })
  for(let i=0;i<nums.length-1;i++){
    if(map.has(target-nums[i])&&map.get(target-nums[i])!=i){
      res[0]=i;
      res[1]=map.get(target-nums[i]);
      break;
    }
  }
  return res
};

/**
 * @description 暴力枚举
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum2 = function(nums, target) {
  let res=[];
  for(let i=0;i<nums.length-1;i++){
    for(let j=i+1;j<nums.length;j++){
      if(nums[i]+nums[j]==target){
        res[0]=i;
        res[1]=j;
        break;
      }
    }
  }
  return res
};