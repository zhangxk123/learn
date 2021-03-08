let value=[1,2,3];
const get=()=>value;
const push=(...args)=>value.push(...args);
export {
  value,
  get,
  push
}

setTimeout(() => {
  push(4)
}, 1000);