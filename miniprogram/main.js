// 渲染层
const  worker=new Worker("./worker.js");

worker.postMessage("我是主worker")

// worker.onmessage=(e)=>{
//   console.log(`主接收`,e.data)
// }