/**
 * forEach跟Map的参数一模一样，唯一的区别就是map会返回一个新数组，而forEach返回的是undefined
 * 并且他们都没有for循环快
 * @param1 callback
 * @param2 context
 */
[1, 2, 3].map(
  function (value, index, originalArray) {
    console.log(`${index}: ${value} / ${originalArray} /`);
    console.log(this);
    return value + 1;
  },
  { test: 1 }
);
// 0: 1 / 1,2,3 / {test: 1}
// 1: 2 / 1,2,3 / {test: 1}
// 2: 3 / 1,2,3 / {test: 1}
// 返回值：[2, 3, 4]

[1, 2, 3].forEach(
  function (value, index, originalArray) {
    console.log(`${index}: ${value} / ${originalArray} /`);
    console.log(this);
  },
  { test: 1 }
);
// 0: 1 / 1,2,3 / {test: 1}
// 1: 2 / 1,2,3 / {test: 1}
// 2: 3 / 1,2,3 / {test: 1}
// 返回值：undefined

//返回 metrics 中 selected：true 的元素的 id 组成的数组
const metrics = [
  { id: "sales", selected: true, title: "Sales" },
  { id: "units", selected: true, title: "Units" },
  { id: "buyers", selected: false, title: "Buyers" },
];

//注意：map 遍历数组时，每次都会返回一个值，如果没有显示返回，就返回 undefined
const ids = metrics.map((item) => {
  if (item.selected) return item.id;
});
console.log(ids); // ['sales','units',undefined]

const ids2 = metrics.map((item) => item.selected && item.id);
console.log(ids2); // ['sales','units',false]

const ids3 = metrics.filter((item) => item.selected).map((item) => item.id);
console.log(ids3); // ['sales','units']

const ids4 = [];
metrics.forEach((item) => {
  item.selected && ids4.push(item.id);
});
console.log(ids4);

const ids5 = metrics.reduce((newArr, next) => {
  next.selected && newArr.push(next.id);
  return newArr;
}, []);
console.log(ids5);
