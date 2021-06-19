const { swap } = require('../utils/utils');

const arr = [1, 10, 6, 42, 21, 9, 18];

const buddleSort = (arr: number[]): number[] => {
  // ② 忽略 ① 中曾经找到的最大元素，重复执行步骤 ①，直到全部元素有序
  for (let end = arr.length; end > 0; end--) {
    // ①从头开始比较每一对相邻元素，如果第1个比第2个大，就交换它们的位置
    // ✓ 执行完一轮后，最末尾那个元素就是最大的元素
    for (let i = 1; i <= end; i++) {
      if (arr[i - 1] > arr[i]) {
        swap(i - 1, i, arr);
      }
    }
  }
  return arr;
};

console.log(buddleSort(arr));
