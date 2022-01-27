//有效的括号
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  //当字符串为奇数位时直接返回结果
  if (s % 2 === 1) return false;
  const stack = [];

  for (let i = 0, len = s.length; i < len; i++) {
    const cur = s[i];
    //碰到'(' '[' '{' 则入栈
    if (cur === "(" || cur === "[" || cur === "{") {
      stack.push(cur);
    } else {
      // 碰到')' ']' '}'则出栈并比较
      const top = stack[stack.length - 1];
      if (
        (top === "(" && cur === ")") ||
        (top === "[" && cur === "]") ||
        (top === "{" && cur === "}")
      ) {
        stack.pop(); //栈顶出栈
      } else {
        return false;
      }
    }
  }

  return stack.length === 0; //如果循环结束栈为空则说明匹配成功
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
