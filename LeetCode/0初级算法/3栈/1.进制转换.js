// 十进制转二进制
function main(num,base) {
  let res="";
  if(base<2||base>36){
    return res
  }
  let digits='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let stack=[];
  while (num>0) {
    stack.push(num%base);
    num=Math.floor(num/base)
  }
  while (stack.length) {
    res+=digits[stack.pop()]
  }
  return res
}

console.log(main(10,2))
console.log(main(10,16))