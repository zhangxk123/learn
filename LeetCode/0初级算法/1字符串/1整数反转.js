/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  x+="";
  x=x.split("");
  if(x[0]=="-"){
    x.reverse().pop();
    return -(x.join(""));
  }
  return ~~(x.reverse().join(""))
};