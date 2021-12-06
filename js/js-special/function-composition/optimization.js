//优化
const { toUpperCase, hello } = require("./try");
var compose = function (f, g) {
  return function (x) {
    return f(g(x));
  };
};

var greet = compose(hello, toUpperCase);
console.log(greet("kevin"));
