/*
 * @Author: your name
 * @Date: 2021-07-03 09:59:15
 * @LastEditTime: 2022-02-01 21:32:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /daliy-algorithm-js-/leetCode/11盛最多水的容器.js
 */
// 暴力解法，时间复杂度非常高
// const maxArea = function (height) {
//   let area = [];
//   for (let i = 1; i <= height.length; i++) {
//     for (let j = 1; j <= height.length; j++) {
//       if (j - i > 0) {
//         area.push((j - i) * Math.min(height[i - 1], height[j - 1]));
//       }
//     }
//     area.push(i * height[i]);
//   }
//   console.log(area);
//   return Math.max(...area);
// };

// 使用双指针去思考

// const maxArea = function (height) {
//   // 定义两个指针
//   let first = 0;
//   let last = height.length - 1;
//   const result = [];
//   for (let i = 0; i < height.length; i++) {
//     if (height[last] >= height[first]) {
//       result.push((last - first) * height[first]);
//       first++;
//     } else {
//       result.push((last - first) * height[last]);
//       last--;
//     }
//   }
//   return Math.max(...result);
// };

// height = [2, 3, 4, 5, 18, 17, 6];
// const value = maxArea(height);
// console.log(value);
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let res = [];
  while (left < right) {
    if (height[left] < height[right]) {
      res.push(height[left] * (right - left));
      left++;
    } else {
      res.push(height[right] * (right - left));
      right--;
    }
  }
  return Math.max(...res);
};
const arr = [1, 2, 1];
console.log(maxArea(arr));
