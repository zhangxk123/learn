const createPromise = (n) => () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(n);
      resolve(n);
    }, 1000 * n);
  });

const logTime = () => {
  const t = new Date();
  console.log(`${t.getMinutes()}:${t.getSeconds()}`);
};
function genPromise(num = util.getAddId()) {
  // delay 的值在 2000 以内，是个随机的整数
  // const delay = parseInt((Math.random() * 10000000) % 2000, 10);
  const delay = num*1000/20
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num);
    }, delay);
  }).then((res) => console.log(`第${res}个异步函数，用时${delay}ms`));
}
/**
 * 自增id
 * @return {*}
 */
let util = (function () {
  let id = 0;
  return {
    getAddId() {
      return id++;
    },
  };
})();
module.exports = {
  createPromise,
  logTime,
  util,
  genPromise,
};
