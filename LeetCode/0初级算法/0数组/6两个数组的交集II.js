// 进阶：

// 如果给定的数组已经排好序呢？你将如何优化你的算法？
// 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
// 如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function(nums1, nums2) {
  nums1.sort((a,b)=>a-b); //sort()默认按照字符编码顺序排，要保证你按照数字大小排，写上a-b
  nums2.sort((a,b)=>a-b);
  let res=[];
  for(let i=0,j=0;i<nums1.length&&j<nums2.length;){
      if(nums1[i]<nums2[j]){
        i++;
      }else if(nums1[i]>nums2[j]){
        j++;
      }else{
        res.push(nums1[i]);
        i++;
        j++;
      }
  }
  return res
};
