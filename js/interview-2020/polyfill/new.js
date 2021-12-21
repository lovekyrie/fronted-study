// 手写new
const isComplexDataType = (obj) =>
  (typeof obj === "function" || typeof obj === "object") && obj !== null;

const selfNew = function (fn, ...rest) {
  const instance = Object.create(fn.prototype);
  let res = fn.apply(instance, rest);
  return isComplexDataType(res) ? res : instance;
};

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("kevin", 24);
const person2 = selfNew(Person, "lilly", 28);
console.log(person1);
console.log(person2);
