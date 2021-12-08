const arr = Array.from({ length: 10000 }, (v, i) => i);

console.time("var");
var sum = 0;
for (var i = 0, length = arr.length; i < length; i++) {
  sum += i;
}
console.timeEnd("var");
console.time("let");
sum = 0;
for (let i = 0, length = arr.length; i < length; i++) {
  sum += i;
}
console.timeEnd("let");
