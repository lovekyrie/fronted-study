// 计数排序
/* exp: preArr = [8, 4, 2, 5, 3];
countingArr = Array(8 - 2 + 1);
==>[0,0,0,0,0,0,0]==>[0,0,0,0,0,0,1]=>[0,0,1,0,0,0,1]==>[1,0,1,0,0,0,1]=>[1,0,1,1,0,0,1]==>[1,1,1,1,0,0,1]
统计数组变形 后面的元素等于前面的元素之和,也就是排名数组
[1,2,3,4,4,4,5]
遍历原始数组，从统计数组中找到正确位置，输出到结果数组
res=new Array(preArr.length)
res==> 1.[0,0,0,0,8]==>2.[0,0,4,0,8]==>3.[2,0,4,0,8]==>4.[2,0,4,5,8]==>4.[2,3,4,5,8]
countingArr==>1. [1,2,3,4,4,4,4]==>2. [1,2,2,4,4,4,4]==>3. [0,2,2,4,4,4,4]==>4.[0,2,2,3,4,4,4]==>5.[0,1,2,3,4,4,4]
 */
let countingSort = function (arr, flag = 0) {
  // 得到统计数组长度
  let length = arr.length
  const min = Math.min.apply(null, arr)
  const max = Math.max.apply(null, arr)
  let d = max - min,
    add = min < 0 ? -min : 0;
  // 得到初版统计数组
  const countingArr = new Array(d + 1 + add).fill(0)
  for (let i = 0; i < length; i++) {
    const temp = arr[i] - min + add
    countingArr[temp] += 1
  }
  // 统计数组变形，后面值等于前面值之和
  let sum = 0
  for (let i = 0; i < d + 1 + add; i++) {
    sum += countingArr[i]
    countingArr[i] = sum
  }
  // 声明结果数组，遍历原始数组，从统计数组找到位置赋值给结果数组
  let res = new Array(length)
  for (let i = 0; i < length; i++) {
    const temp = arr[i] - min + add
    res[countingArr[temp] - 1] = arr[i]
    countingArr[temp]--
  }
  return flag ? res.reverse() : res
}

let arr = [2, 9, 6, 7, 4, 3, 1, 7, 0, -1, -2]
console.log(countingSort(arr))