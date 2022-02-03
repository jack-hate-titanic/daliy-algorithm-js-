/*
 * @Author: your name
 * @Date: 2022-02-01 10:28:24
 * @LastEditTime: 2022-02-01 10:31:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /daliy-algorithm-js-/leetCode/283移动.js
 */

var moveZeroes = function (nums) {
  // 设置下标位，这是利用下标发，常用语重新确定位置的时候
  let length = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      nums[length] = nums[i];
      length++;
    }
  }
  for (let j = length; j < nums.length; j++) {
    nums[j] = 0;
  }
};
let nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1);
