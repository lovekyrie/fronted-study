//选择排序
// 1.有n个数，需要排序n-1次
// 2.第一次选择最小值，放在第一位
// 3.第二次选择最小值，放在第二位
// 4.重复该过程... (每次内层循环遍历的过程中找到剩下所有元素的最小值下标，并跟i交换位置)
// 5.直到n-1次，放在第n-1位
let selectSort = function (arr, flag = 0) {
  let len = arr.length >>> 0,
    temp = 0;
  //一共需要排序多少遍(n-1)
  for (let i = 0; i < len - 1; i++) {
    temp = i;
    //寻找[i,n)区间里的最小值
    for (let j = i + 1; j < len; j++) {
      //在比较过程中更新当前值为最小值的下标
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
