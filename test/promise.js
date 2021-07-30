// promise.all
function promiseAll(promiseList){
  if(Array.isArray(promiseList)==false){
    throw Error('')
  }
  return new Promise((resolve,reject)=>{
    let res=[];
    let count=0;
    for(let i=0;i<promiseList.length;i++){
      Promise.resolve(promiseList[i]).then(result=>{
        res[i]=result;
        count++;
        if(count==res.length){
          resolve(res)
        }
      }).catch(err=>{
        reject(err)
      })
    }
  })
}
// promise.race
function promiseRace(promiseList){
  if(Array.isArray(promiseList)==false){
    throw Error('')
  }
  return new Promise((resolve,reject)=>{
    let hasResult=false;
    for(let i=0;i<promiseList.length;i++){
      Promise.resolve(promiseList[i]).then(result=>{
        if(hasResult==false){
          resolve(result);
          hasResult=true;
        }
      }).catch(err=>{
        if(hasResult==false){
          reject(err);
          hasResult=true;
        }
      })
    }
  })
}
//promise.finally
function promiseFinally(defer,cb){
  return Promise.resolve(defer).then(data=>{
    cb();
    return data;
  }).catch(err=>{
    cb();
    throw err
  })
}
/**
 * @description 实现一个轮询功能，包装异步请求，成功则成功，失败则最多尝试max次
 * @param {any} defer 异步请求函数，返回thenable对象
 * @param {any} max 最大尝试次数
 * @param {any} ms 尝试时间间隔
 * @return {any} Promise实例
 */
function asyncPoll(defer,ms,max){
  return new Promise((resolve,reject)=>{
    let count=0;
    const tick=()=>{
      defer().then(res=>{
        resolve(res)
      }).catch(err=>{
        if(count==max){
          reject(count)
          return 
        }
        count++;
        setTimeout(tick, ms);
      })
    }
    tick()
  })
}

//promise 并发
class limitPromise {
  constructor(limit){
    this._limit=limit;
    this._taskQueue=[];
    this._flushCount=0;
  }
  //调用器
  call(caller,args){
    return new Promise((resolve,reject)=>{
      let task=this.create(caller,args,resolve,reject);
      if(this._flushCount>=this.limit){
        this._taskQueue.push(tack);
      }else{
        task()
      }
    })
  }
  //生成器
  create(caller,args,resolve,reject){
    return ()=>{
      caller(...args)
      .then(resolve)
      .catch(reject)
      .finally(()=>{
        this._flushCount--;
        if(this._taskQueue.length){
          //取出第一个
          const task=this._taskQueue.shift();
          task()
        }
      })
      this._flushCount++;
    }
  }
}

let p1=()=>new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(Math.random()>=0.1){
      resolve('yes')
    }else{
      reject('no')
    }
  },500)
})
// let p2=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve(2)
//   },500)
// })
// let p3=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve(3)
//   },100)
// })
// promiseRace([p1,p2,p3]).then(res=>{
//   console.log(res)
// }).catch(err=>{
//   console.log(`err`,err)
// })
// promiseFinally(p1,()=>{
//   console.log(123123)
// })
// asyncPoll(p1,1000,3).then(res=>{
//   console.log(res)
// }).catch(err=>{
//   console.log(`失败了${err}次`)
// })

asyncPoll(p1,1000,3).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(`失败了${err}次`)
})