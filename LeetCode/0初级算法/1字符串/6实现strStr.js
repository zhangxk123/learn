// 实现 strStr() 函数。

// 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。


/**
 * @description 滑动窗口
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function(haystack, needle) {
  if(needle==""||haystack==needle){
    return 0
  }
  let len1=haystack.length;
  let len2=needle.length;
  for(let i=0;i<=len1-len2;i++){
    if(haystack.slice(i,i+len2)===needle){
      return i
    }
  }
  return -1
};

// "abc"
// "c"
console.log(strStr("hello","ll"))
console.log(strStr("mississippi","issipi"))
console.log(strStr("mississippi","issip"))