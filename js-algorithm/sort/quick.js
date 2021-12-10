/* 快速排序：
  1. 先从数组中取出中间数坐标，并取出中间数作为基数
  2. 建两个数组，遍历数组依次跟基数比较，小于的存放在左数组，大于的放在右边数组
  3. 递归处理左右数组，并且把基数拼进结果数组并返回
  时间复杂度：O(nlogn)
*/
let quickSort = function (arr) {
  const len = arr.length;
  if (len <= 1) return arr;
  const left = [],
    right = [];
  const idx = Math.floor(len / 2);
  const mid = arr.splice(idx, 1)[0];
  for (let i = 0; i < len - 1; i++) {
    let val = arr[i];
    if (mid > val) {
      left.push(val);
    } else {
      right.push(val);
    }
  }

  return quickSort(left).concat([mid], quickSort(right));
};
let arr = [2, 9, 6, 7, 4, 3, 1, 7];
console.log(quickSort(arr));
