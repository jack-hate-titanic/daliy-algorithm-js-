/*
 * @Author: your name
 * @Date: 2021-10-31 12:24:46
 * @LastEditTime: 2021-10-31 12:40:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /daliy-algorithm-js-/leetCode/409最长回文串.js
 */
var longestPalindrome = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i])) {
      map.delete(s[i]);
      continue;
    }
    map.set(s[i], 1);
  }
  let mapSize = map.size ? map.size - 1 : 0;
  return s.length - mapSize;
};

console.log(longestPalindrome("abccccdd"));
