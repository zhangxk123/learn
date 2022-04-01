/**
 * @description 异步并发控制
 * @param {*} limit 最大并发数量
 * @param {*} params 异步函数参数
 * @param {*} iteratorFn 异步函数
 * @return {*} Promise
 */
async function asyncPool(limit, params, iteratorFn) {
  const alllList = [];
  const executing = [];
  for (const item of params) {
    const p = Promise.resolve(iteratorFn(item));
    alllList.push(p);
    if (limit <= params.length) {
      const defer = p.then(() =>
        executing.splice(executing.indexOf(defer), 1)
      );
      executing.push(defer);
      if (executing.length >= limit) {
        await Promise.race(executing);
      }
    }
  }
  return Promise.all(alllList);
}

const timer = (n) => {
  console.log('开始', n);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('结束', n);
      resolve(n);
    }, n);
  });
};
(async () => {  
  // Only one promise is run at once
  const result = await asyncPool(2, [3000, 5000, 1000, 2000], timer);
  console.log(result);
})();
