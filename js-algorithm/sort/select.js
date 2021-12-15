//选择排序
// 1.有n个数，需要排序n-1次
// 2.第一次选择最小值，放在第一位
// 3.第二次选择最小值，放在第二位
// 4.重复该过程...
// 5.直到n-1次，放在第n-1位
let selectSort = function (arr, flag = 0) {
  let len = arr.length >>> 0,
    temp = 0;
  //一共需要排序多少遍(n-1)
  for (let i = 0; i < len - 1; i++) {
    temp = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[temp]) {
        temp = j;
      }
    }
    //每一趟保证i位置为最小值
    if (temp !== i) {
      [arr[i], arr[temp]] = [arr[temp], arr[i]];
    }
  }

  return flag ? arr.reverse() : arr;
};

let arr = [2, 9, 6, 7, 4, 3, 1, 7, 0, -1, -2];
console.log(selectSort(arr, 1));
