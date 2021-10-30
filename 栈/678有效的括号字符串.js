/*
 * @Author: your name
 * @Date: 2021-10-10 22:30:24
 * @LastEditTime: 2021-10-10 23:48:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /daliy-algorithm-js-/栈/678有效的括号字符串.js
 */
/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function (nums) {
//   let obj = {};
//   for (let i = 0; i < nums.length; i++) {
//     let value = nums[i];
//     if (String(value) in obj) {
//       obj[value] = value;
//     } else {
//       obj[value] = undefined;
//     }
//   }
//   for (let i = 0; i < nums.length; i++) {
//     if (obj[nums[i]] === undefined) {
//       return nums[i];
//     }
//   }
// };
// 方法二，排序
var singleNumber = function (nums) {
  nums = nums.sort();
  for (let i = 1; i < nums.length; i = i + 2) {
    let value = nums[i];
    console.log(i);
    if (value !== nums[i - 1]) {
      return nums[i - 1];
    }
  }
  return nums[nums.length - 1];
};
