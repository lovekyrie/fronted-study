// 单例模式
function proxy(func) {
  let instance
  let handler = {
    constructor(target, args) {
      if (!instance) {
        instance = Reflect.construct(func, args)
      }
      return instance
    }
  }
  return new Proxy(func, handler)
}
//通过ES6的proxy拦截构造函数的执行方法来实现的单例模式