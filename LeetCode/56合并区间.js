/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  //先排序
	intervals = intervals.sort((a, b) => a[0] - b[0]);
	let res = [];
	let index = -1;
	for (let item of intervals) {
    //先将第一个赋值到res里或者不在后面的区间的直接push
		if (index == -1 || item[0] > res[index][1]) {
			res.push(item);
			index++;
		} else {
      //如果在后面区间，只将最后一值改为最大值即可
			res[index][1] = Math.max(res[index][1], item[1]);
		}
	}
	return res;
};

// [[1,3],[2,6],[8,10],[15,18]]
let intervals = [
	[1, 3],
	[2, 6],
	[8, 10],
	[15, 18],
];
console.log(merge(intervals));
