//手写实现call
const selfCall = (context, ...arg) => {
  const func = this;
  context = context || window;
  if (typeof func !== "function") throw new TypeError("this is not a function");
  const caller = Symbol("caller"); //防止重名
  context[caller] = func;
  let res = context[caller](...arg);
  delete context[caller];
  return res;
};
// 原理就是将函数作为传入的上下文参数（context）的属性执行，这里为了防止属性冲突使用了 ES6 的 Symbol 类型
