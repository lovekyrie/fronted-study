//闭包 单词别写错了。。

// 1.嵌套作用域 在JavaScript中函数可以嵌套函数
(function autorun() {
  let x = 1;

  function log() {
    console.log(x);
  }
  log();
})();

/* log() 即是一个嵌套在 autorun() 函数里面的函数。
   在 log() 函数里面可以通过外部函数访问到变量 x。此时，log() 函数就是一个闭包。
   闭包就是内部函数，我们可以通过在一个函数内部或{}块里定义一个函数来创建闭包
 */

// 2.外部函数作用域: 🌟内部函数可以访问外部函数中定义的变量，即使外部函数已经执行完毕
(function () {
  let x = 1;
  setTimeout(() => {
    console.log(x);
  }, 1000);
})();
// 并且，内部函数还可以访问外部函数的行参，如下：
(function (p) {
  let x = 1;
  setTimeout(function () {
    console.log(x);
    console.log(p);
  }, 1000);
})(10);

// 3.外部块作用域 内部函数可以访问外部块中定义的变量，即使外部块已执行完毕
{
  let x = 1;
  setTimeout(function log() {
    console.log(x);
  }, 1000);
}

// 4.词法作用域： 是指内部函数在定义的时候就决定了其外部作用域
(function autorun() {
  let x = 1;

  function log() {
    console.log(x);
  }

  function run(fn) {
    lex = 10;
    fn();
  }

  run(log); //1
})();
/* log() 函数是一个闭包，它在这里访问的是 autorun() 函数中的 x 变量，而不是 run 函数中的变量。
闭包的外部作用域是在其定义的时候已决定，而不是执行的时候。
autorun() 的函数作用域即是 log() 函数的词法作用域。 */

// 5.作用域链 即：闭包可以访问其外部(父)作用域中的定义的所有变量。
let x0 = 0;
(function autorun1() {
  let x1 = 1;
  (function autorun2() {
    let x2 = 2;
    (function () {
      let x3 = 3;
      console.log(`x0:${x0},x1:${x1},x2:${x2},x3:${x3}`);
    })();
  })();
})();

// 使用场景
/* 当外部作用域执行完毕后，内部函数还存活（仍在其他地方被引用）时，闭包才真正发挥其作用。譬如以下几种情况：
在 🌟 异步任务例如 timer 定时器，事件处理，Ajax 请求中被作为回调
被外部函数作为返回结果返回，或者返回结果对象中引用该内部函数 */

// 注意此刻循环里面放了timer定时器，是异步任务。所以会等循环结束后，在执行异步任务
for (var i = 0; i < 3; i++) {
  console.log(i);
}


for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// IIFE 使用立即执行函数创建闭包
for (var i = 0; i < 3; i++) {
  // j就是IIFE所传的变量i
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 1000);
  })(i);
}