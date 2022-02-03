/*
 * @Author: your name
 * @Date: 2021-11-10 06:04:41
 * @LastEditTime: 2021-11-10 06:50:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /daliy-algorithm-js-/leetCode/120.js
 */
var minimumTotal = function (triangle) {
  let arr = [];

  for (let i = triangle.length - 1; i >= 0; i--) {
    arr[i] = [];
    for (let j = 0; j < triangle[i].length; j++) {
      if (i === triangle.length - 1) {
        arr[i][j] = triangle[i][j];
      } else {
        arr[i][j] = Math.min(arr[i + 1][j], arr[i + 1][j + 1]) + triangle[i][j];
      }
    }
  }
  return arr;
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
