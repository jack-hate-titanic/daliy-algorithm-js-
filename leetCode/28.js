/*
 * @Author: your name
 * @Date: 2022-02-03 21:46:10
 * @LastEditTime: 2022-02-03 22:12:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /daliy-algorithm-js-/leetCode/28.js
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var isSameStr = function (str, needle) {
  return str === needle;
};

var strStr = function (haystack, needle) {
  if (needle === "") {
    return 0;
  }
  if (haystack.length < needle.length) {
    return -1;
  }
  // 定义左指针
  let left = 0;
  while (left < haystack.length) {
    if (haystack[left] === needle[0]) {
      if (isSameStr(haystack.substring(left, left + needle.length), needle)) {
        return left;
      } else {
        left++;
      }
    } else {
      left++;
    }
  }
  return -1;
};

let str1 = "aaaa";
let str2 = "bba";
console.log(strStr(str1, str2));
