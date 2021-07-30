## commonjs总结

1. exports默认和module.exports指向同一个对象，除非module.exports直接赋值为另一个对象
2. require()，已经引入的模块只会加载一次，首次加载的模块会缓存在内存里，后面多次require都会从缓存里取
3. 运行时执行，执行的是同步操作，所以支持动态引入和条件引入
4. 全局的this===exports，默认{}