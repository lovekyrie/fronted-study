//350. 两个数组的交集 II
/**
 * 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。
 * 返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  //得到两个数组的map集合
  const mapOne = getMapCount(nums1);
  const mapTwo = getMapCount(nums2);
  const res = [];
  //循环某一个map,用of！！
  for (let key of mapOne.keys()) {
    //mapTwo是否存在该key
    const same = mapTwo.get(key);
    if (same) {
      //当mapTwo存在时，才需要去比较计算出现过最小次数
      const min = Math.min(same, mapOne.get(key));
      for (let i = 0; i < min; i++) {
        //结果是key,而不是key出现的次数
        res.push(key);
      }
    }
  }

  return res;
  /**
   * 根据数组得到map集合
   * @param {*} arr
   */
  function getMapCount(arr) {
    let map = new Map();
    for (let i = 0, len = arr.length; i < len; i++) {
      const item = arr[i];
      //得到map是否存在该key
      const count = map.get(item);
      if (count) {
        map.set(item, count + 1);
      } else {
        map.set(item, 1);
      }
    }
    //要返回map
    return map;
  }
};

const nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];
intersect(nums1, nums2);
