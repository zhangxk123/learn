let a = 1;
let o = {
	name: "xx",
	age: 18,
};
exports.a = a; // 导出 原始类型
exports.o = o; // 导出 引用类型
a = 10;
o.age = 20;
console.log("加载了一次");
setTimeout(() => {
	a = 100;
	o.age = 200;
}, 0);
//导出是一个 模块对象（就是一个普通的js对象） 即{a:1,o:{name:"xx",age:20}}
