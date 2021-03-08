// 逻辑层
onmessage=(e)=>{
  console.log("我是web worker")
  console.log(e);
}

postMessage('fff')

console.log(this);