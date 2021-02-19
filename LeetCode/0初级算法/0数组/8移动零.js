// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// tag:数组，双指针

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  for(let i=0,j=0;i<nums.length&&j<nums.length;){
    if(nums[j]!=0){
      j++;
      i++;
    }else{
      if(nums[i]!=0){
        nums[j]=nums[i];
        nums[i]=0;
        j++;
      }else{
        i++;
      }
    }
  }
  return nums
};

// let initVal=[0,1,0,3,12];
let initVal=[4,2,4,0,0,3,0,5,1,0];
console.log(initVal);
console.log(moveZeroes(initVal))