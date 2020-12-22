## commonjs总结

1. exports默认等于module.exports这个对象，所以导出的值都是这个对象里的属性，除非module.exports=null
2. require()，已经引入的模块只会加载一次，首次加载的模块会缓存在内存里，后面多次require都会从内存里取
3. 运行时执行，执行的是同步操作，所以支持动态引入和条件引入
