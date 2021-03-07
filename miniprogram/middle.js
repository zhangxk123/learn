function workerMessage( ) {  }
class Page {
  constructor(opt,event){
    this.id=opt.id;
    this.data=opt.data;
    this.template=opt.template;
    this.methods=opt.methods;
    this.event=event;
    this.reg=this.reg.bind(this);
    this.eventTypeMaps=[];
    this.mth=[]
  }
  reg(){
    this.mth=Object.keys(this.methods).map(item=>{
      this.eventTypeMaps.push(this.methods[item])
      return {[item]:`trick(${this.eventTypeMaps.length-1},${this.id})`}
    })
    Object.keys(this.data).map(item=>{
      this.event.on(`${this.id}-${item}`,(value)=>{
        postMessage({type:'changeDom',opt:{
          id:this.id,
          data:Object.assign({},this.data,value,...this.mth)
        }})
      })
    })
  }

  setState(data){
    Object.keys(data).map(item=>{
      this.event.emit(`${this.id}-${item}`,data)
    })
  }
}