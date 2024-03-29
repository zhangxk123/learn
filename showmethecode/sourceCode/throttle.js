/**
 * @description 规定一个单位时间， 在这个单位时间内， 只能有一次触发事件的回调函数执行，
    如果在同一个单位时间内某事件被触发多次， 只有一次能生效
 * @export
 * @param {*} fn 需要节流的函数
 * @param {number} [ms=1000 / 60]
 * @return {*} 返回一个已实现节流的函数
 */
export default function throttle(fn, ms = 1000 / 60) {
  let canuse = true;
  return function (...args) {
    if (!canuse) {
      return;
    }
    canuse = false;
    fn.apply(this, args);
    setTimeout(() => {
      canuse = true;
    }, ms);
  };
}


export default function throttle2(fn, ms = 1000 / 60) {
  let pre = 0;
  return function (...args) {
    const now = Date.now()
    if (now - pre >= ms) {
      fn.apply(this, args);
      pre = now
    }
  };
}