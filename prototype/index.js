//new
function newObject(fn, ...args) {
	let obj = {};
	obj.__proto__ = fn.prototype;
	const res = fn.apply(obj, args);
	if (typeof res === "object" && res !== null) {
		return res;
	}
	return obj;
}

// call
Function.prototype.call = function (context, ...args) {
	//非严格模式
	context = context || window;

	const fnSymbol = Symbol("fn");
	context[fnSymbol] = this;

	context[fnSymbol](...args);
	delete context[fnSymbol];
};

// bind

Function.prototype.bind = function (context, ...args) {
	context = context || window;
	const fnSymbol = Symbol("fn");
	context[fnSymbol] = this;
	return function (...args2) {
		const res = context[fnSymbol](args.concat(args2));
		delete context[fnSymbol];
		return res;
	};
};

//手写instanceof
function instanceofImpt(inst,fn){
  while (inst!=null) {
    if(inst.__proto__==fn.prototype){
      return true
    }
    inst=inst.__proto__
  }
  return false
}


//继承
//属性借助构造函数执行 
super.call(this,...args)
//方法使用
sub.prototype=Object.create(super.prototype)
sub.prototype.constructor=sub