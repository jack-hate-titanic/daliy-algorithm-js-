/*
 * @Author: your name
 * @Date: 2022-02-01 11:08:05
 * @LastEditTime: 2022-02-01 11:13:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /daliy-algorithm-js-/leetCode/1两数之和解法二.js
 */
var twoSum = function (nums, target) {
  // 我们先把数组进行排序
  nums.sort((a, b) => {
    return a - b;
  });
  // 定义另个指针
  // 左指针
  let first = 0;
  // 右指针
  let second = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    // 如果两数之和小于target，那么左指针右移
    if (nums[first] + nums[second] < target) {
      first++;
    } else if (nums[first] + nums[second] > target) {
      // 如果两数之和大于target，那么右指针左移
      second--;
    } else {
      // 结果就是返回两个指针
      return [first, second];
    }
  }
};
const nums = [1, 3, 2, 4],
  target = 6;
console.log(twoSum(nums, target));
