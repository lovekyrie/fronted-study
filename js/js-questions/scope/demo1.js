foo(10);
function foo(num) {
  console.log(foo);
  foo = num;
  console.log(foo);
  var foo;
}
console.log(foo);
var foo = 1; //同名函数声明 跟变量，变量的声明会被忽略
console.log(foo);
