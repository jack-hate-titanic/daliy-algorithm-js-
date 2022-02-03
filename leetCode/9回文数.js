/*
 * @Author: your name
 * @Date: 2021-10-31 12:16:31
 * @LastEditTime: 2021-10-31 12:21:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /daliy-algorithm-js-/leetCode/9回文数.js
 */
var isPalindrome = function (x) {
  const str = String(x);
  return str === str.split("").reverse().join("");
};

console.log(isPalindrome(-10));
