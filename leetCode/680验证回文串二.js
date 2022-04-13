/*
 * @Author: your name
 * @Date: 2021-10-31 12:14:30
 * @LastEditTime: 2022-02-03 13:53:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /daliy-algorithm-js-/leetCode/680验证回文串二.js
 */
var isPalindrome = function (s) {
  // 我们先对字符串进行一下处理，只留下字母和数字
  return s === s.split("").reverse().join("");
};

var validPalindrome = function (s) {
  if (isPalindrome(s)) {
    return true;
  }
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      console.log(s.substring(left + 1, right + 1));
      console.log(s.substring(left, right));
      return (
        isPalindrome(s.substring(left + 1, right + 1)) ||
        isPalindrome(s.substring(left, right))
      );
    } else {
      left++;
      right--;
    }
  }
};

let s = "abca";
console.log(validPalindrome(s));
