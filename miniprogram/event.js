// 事件驱动
// 观察者模式
class Event{
  constructor(name){
    this.name=name;
    this.observers={};
  }
  on(type,handler){
    if(Object.hasOwnProperty(type)){
      this.observers[type].push(handler)
    }else{
      this.observers[type]=[handler]
    }
  }
  emit(type,opt){
    if(this.observers[type]){
      this.observers[type].map(h=>h.call(this,opt))
    }
  }
}

const events=new Event('my')

events.on('buy',(value)=>{
  console.log(`买东西`,value.name)
})
events.on('go',()=>{
  console.log(`我走了`)
})

events.emit('buy',{name:`可乐`})