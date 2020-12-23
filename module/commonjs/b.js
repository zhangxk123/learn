const { a, o, getA, add } = require("./a");
console.log("add之前a：" + a);
console.log(add(10));
console.log("add之后a：" + a);
console.log("getA：" + getA());

console.log("add之前o.a：" + o.a);
console.log(add(10));
console.log("add之后o.a：" + o.a);
