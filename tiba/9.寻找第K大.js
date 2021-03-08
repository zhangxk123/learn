/**
 * 
 * @param a int整型一维数组 
 * @param n int整型 
 * @param K int整型 
 * @return int整型
 */
function findKth( a ,  n ,  K ) {
  // write code here
  function help(a){
      const n=a.length;
      if(n==1){
          return a
      }
      if(n==2){
          if(a[0]>a[1]){
              return [a[1],a[0]]
          }
          return a
      }
      let mid=Math.floor(n/2);
      return help(a.slice(0,mid)).concat(help(a.slice(mid)))
  }
  console.log(`sort:`+help(a))
  // return help(a)[K-1]
}

console.log(findKth([1,3,5,2,2],5,3))
module.exports = {
  findKth : findKth
};