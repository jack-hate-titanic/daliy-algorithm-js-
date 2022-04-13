/*
 * @Author: your name
 * @Date: 2022-02-03 12:19:16
 * @LastEditTime: 2022-02-03 12:25:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /daliy-algorithm-js-/leetCode/125方法二.js
 */

var isPalindrome = function (s) {
  // 我们先对字符串进行一下处理，只留下字母和数字
  s = s.replace(/\W/g, "").replace("_", "").toLowerCase();
  // 双指针法
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};

const s = "A man, a plan, a canal: Panama";
const bool = isPalindrome(s);
console.log(bool);
