## esModule 总结

```js
import c, { a } from "./b.js";
import { default as c, a } from "./b.js";
import * as all from "./b.js"; // all.default
// 以上方法均可同时获取默认导出和普通导出
```

1. import 和 export 是 es6 语法，但是{}不是解构语法，所以不能用 {a:b},可以用{a as b}
2. export 跟语句或者{}，default 后面只能跟值
3. import 只能写一次，因为导入的值都相当于const，最好在文件顶部写，虽然import语句会被提升到模块顶部
4. es模块多次引入，也只会加载一次
