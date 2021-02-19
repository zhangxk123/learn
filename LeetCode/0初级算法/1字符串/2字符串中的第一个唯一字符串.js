/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let index=-1;
  for(let i=0;i<s.length;i++){
    if(s.indexOf(s[i])==s.lastIndexOf(s[i])){
      index=i;
      break;
    }
  }
  return index
};