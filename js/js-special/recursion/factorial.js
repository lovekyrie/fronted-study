//定义：程序调用自身的变成技巧成为递归
//以阶乘为例
function factorial(n) {
  if (n == 1) return n;
  return n * fibonacci(n - 1)
}
console.log(fibonacci(5))