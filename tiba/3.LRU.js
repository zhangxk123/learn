/**
 * lru design
 * @param operators int整型二维数组 the ops
 * @param k int整型 the k
 * @return int整型一维数组
 */
function LRU(operators, k) {
	// write code here
	if (operators.length === 0) {
		return [];
	}
	let lruc = new LRUClass(k);
	let res=[];
	operators.forEach(op => {
		if (op[0] == 1) {
			lruc.set(op[1], op[2]);
      res.push(op[0])
		}
		if (op[0] == 2) {
			const result=lruc.get(op[1]);
      if(result==-1){
        res=[1,-1]
      }
		}
	});
	return res;
}
function LRUClass(k) {
	this.cache = new Map();
	this.size = k;
}
LRUClass.prototype.set = function (x, y) {
	if (this.cache.size === this.size) {
    const keys = [];
    for(let k of this.cache.keys()){
      keys.push(k)
    }
		this.cache.delete(keys[0]);
	}
	this.cache.set(x, y);
};
LRUClass.prototype.get = function (x) {
	let val = this.cache.get(x);
	if (val !== undefined) {
		this.cache.delete(x);
		this.cache.set(x, val);
		return val;
	}
	return -1;
};
LRUClass.prototype.show = function (x) {
	return Object.values(this.cache);
};

console.log(LRU([[1,1,1],[1,2,2],[1,3,2],[2,1],[1,4,4],[2,2]],3))

// const lruc=new LRUClass(3)
// lruc.set(1,1)
// lruc.set(2,2)
// lruc.set(3,2)
// // console.log(lruc)
// lruc.get(1)
// // console.log(lruc)
// lruc.set(4,4)
// // console.log(lruc)
// console.log(lruc.get(2))
// // console.log(lruc)