/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if(strs.length==0){
    return ""
  }
  if(strs.length==1){
    return strs[0]
  }
	strs = strs.sort((a, b) => a.length - b.length);
	const [first, ...others] = strs;
	let res = "";
	let temp = "",
		flag = true;
	for (let i = 0; i < first.length; i++) {
    temp = first[i];
		for (let j = 0; j < others.length; j++) {
			if (others[j][i] != temp) {
				flag = false;
				break;
			}
		}
    if(flag){
      res += temp
    }else{
      break;
    }
	}
	return res;
};