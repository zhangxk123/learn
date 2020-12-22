const { a, o } = require("./b.js");
console.log(a, o);
o.age=1;
console.log(`c模块 o.age`,o.age);
