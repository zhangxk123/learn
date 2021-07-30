/* eslint-disable no-tabs */
function pLimit(limitCount) {
  const queue = [];
  // 当前在执行的异步函数的数量
  let activeCount = 0;
  function enqueue(fn, resolve) {
    // 入队
    queue.push(run.bind(null, fn, resolve));
    // 未达到limit限制，出队并执行
    if (activeCount < limitCount) {
      queue.shift()();
    }
  }
  //包装 原有fn
  async function run(fn, reslove) {
    activeCount++;
    reslove(fn);
    // 使用await可以保证next顺序
    await fn().catch(() => {});
    next();
  }
  function next() {
    activeCount--;
    if (queue.length > 0) {
      // 下一个任务出队并执行
      queue.shift()();
    }
  }
  // 多个构造器公用一个队列
  function generator(fn) {
    return new Promise((resolve) => {
      enqueue(fn, resolve);
    });
  }
  return generator;
}

const { genPromise: fetchSomething } = require("./utils");

const limit = pLimit(4);

// const input = Array.from(new Array(20), (_, i) =>
//   limit(fetchSomething)
// );
const input = [
  limit(fetchSomething),
  limit(fetchSomething),
  limit(fetchSomething),
  limit(fetchSomething),
  limit(fetchSomething),
  limit(fetchSomething),
  limit(fetchSomething),
  limit(fetchSomething),
  limit(fetchSomething),
  limit(fetchSomething),
  limit(fetchSomething),
  limit(fetchSomething),
  limit(fetchSomething),
  limit(fetchSomething)
];
(async () => {
  // Only one promise is run at once
  const result = await Promise.all(input);
  console.log(result);
})();
