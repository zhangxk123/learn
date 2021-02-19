/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let flag=true;
  for(let i=digits.length-1;i>=0;i--){
    digits[i]+=flag;
    if(digits[i]>9){
      flag=true;
      digits[i]=0;
    }else{
      flag=false;
    }
  }
  if(flag){
    digits.unshift(1)
  }
  return digits
};
