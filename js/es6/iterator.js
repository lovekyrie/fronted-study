/* es6迭代器：  所谓迭代器就是一个拥有next方法的对象，每次调用next()都会返回一个结果对象，
  该结果对象有两个属性，value表示当前的值，done表示是否遍历结束
 */
function createIterator(items) {
  var i = 0;
  return {
    next: function () {
      var done = i >= items.length;
      var value = !done ? items[i++] : undefined;
      return { value: value, done: done };
    },
  };
}
//interator现在是一个迭代器
var iterator = createIterator([1, 2, 3]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// for of
const obj = { a: 1 };
obj[Symbol.iterator] = function () {
  return createIterator([1, 2, 3]);
};

for (value of obj) {
  console.log(value);
}

// 默认可遍历对象
const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}
//尽管我们没有手动添加 Symbol.iterator 属性，还是可以遍历成功，
//这是因为 ES6 默认给数组部署了 Symbol.iterator 属性，当然我们也可以自行修改
colors[Symbol.iterator] = function () {
  return createIterator([1, 2, 3]);
};
for (let color of colors) {
  console.log(color);
}
