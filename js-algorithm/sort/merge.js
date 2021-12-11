// 刚递归合并的时候不理解
const merge = (left, right) => {
  //合并数组

  let result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
};

let mergeSort = function (arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  //拆分数组
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  let mergeLeftArr = mergeSort(left);
  let mergeRightAr = mergeSort(right);
  return merge(mergeLeftArr, mergeRightAr);
};

let arr = [2, 9, 6, 7, 4, 3, 1, 7, 0, -1, -2];
console.log(mergeSort(arr));
// 第一步: mergeLeftArr[2,9]  mergeRightAr:[6,7,4]
