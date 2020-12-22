const { a, o } = require("./b.js");
console.log(a, o);

const { a: b, o: o1 } = require("./b.js");
console.log(b, o1);
// require是标准的js函数，require的模块只会加载一次
setTimeout(() => {
  require("./c.js");
  console.log(o.age);
}, 1000);
