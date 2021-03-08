function main(str) {
  let res=true;
  if(str==''){
    return res
  }
  let start=0;
  let end=str.length-1;
  while(start<end){
    if(str[start]!=str[end]){
      return false
    }
    start++;
    end--;
  }
  return true
}

console.log(main('abcd')) //false
console.log(main('abcdcba')) //true
console.log(main('abccba')) //true