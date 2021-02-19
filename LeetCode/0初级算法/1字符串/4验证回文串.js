/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if(s.trim()==""){
    return true
  }
  let res=true;
  const isStr=str=>/[a-zA-Z0-9]/.test(str);
  let len=s.length;
  for(let i=0,j=len-1;i<len-1&&j>0;){
    if(!isStr(s.charAt(i))){
      i++;
      continue
    }
    if(!isStr(s.charAt(j))){
      j--;
      continue
    }
    if((s.charAt(i).toLocaleLowerCase()!=s.charAt(j).toLocaleLowerCase())){
      res=false;
      break;
    }
    i++;
    j--;
  }
  return res
};