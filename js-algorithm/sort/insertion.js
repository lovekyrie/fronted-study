//插入排序
// 1.从第一个元素开始默认已经排序好，
// 2.取出下一个元素，默认从后往前遍历
// 3.如果该元素（已排序）大于新元素（就是取出来的元素也就是下面循环的i），将该元素移到下一位置
// 4.重复3，直到找到新元素小于或等于该元素的位置
// 5.重复2-4
console.time("insertion");
let insertionSort = function (arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    //当前元素 (排序好)
    const cur = arr[i];
    // 下一个元素（新元素 ps:就是从后往前的过程,默认前面的是排序好的）
    let preIndex = i - 1;
    while (preIndex >= 0 && arr[preIndex] > cur) {
      //此时就是cur=arr[preIndex]的意思
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = cur;
  }
  return arr;
};

let arr = [2, 9, 6, 7, 4, 3, 1, 7, 0, -1, -2];
console.log(insertionSort(arr));
console.timeEnd("insertion");
