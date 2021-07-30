// 科里化
function curry(fn){
  return function reply(...args) {
    if(args.length>=fn.length){
      return fn.apply(undefined,args)
    }else{
      return reply.bind(undefined,...args)
    }
  }
}
// 防抖
function debounce(fn,ms) {
  let timer=null;
  return function () {
    if(timer){
      clearTimeout(timer)
    }
    timer=setTimeout(fn.bind(this), ms);
  }  
}
//节流 第一次不延迟执行
function throttle(fn,ms) { 
  let can=true;
  return function () {
    if(can){
      can=false;
      fn.call(this);
      setTimeout(() => {
        can=true
      }, ms);
    }
  }
 }

 // 节流时间戳写法  最后一次立即执行
 function throttle2(fn,ms) { 
  let timer=null;
  let startTime=Date.now();
  return function (...args) {
   let currentTime=Date.now();
   let cTime=ms-(currentTime-startTime);
   clearTimeout(timer);
   if(cTime<=0){
     //立即执行
     fn.apply(this,args)
     startTime=Date.now();
   }else{
     timer=setTimeout(fn, cTime);
   }
  }
 }

//

 //多维数组 扁平化
function flatArray(arr) {
  return arr.flat(Infinity)
}
function flatArray2(arr) {
  while (arr.some(Array.isArray)) {
    arr=[].concat(...arr)
  }
  return arr
}
function flatArray3(arr) {
  return arr.reduce((a,b)=>{
    return a.concat(Array.isArray(b)?flatArray2(b):b)
  },[])
}

//数组去重
function unique(arr){
  return [...new Set(arr)]
}

function unique2(arr){
  let res=[];
  let pre=arr[0];
  for(let i=1;i<arr.length;i++){
    const val=arr[i];
    if(val!=pre){
      res.push(val)
      pre=val;
    }
  }
  return res
}
//sort 冒泡 快排