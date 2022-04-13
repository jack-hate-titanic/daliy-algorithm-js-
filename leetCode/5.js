/*
 * @Author: your name
 * @Date: 2022-02-05 13:10:54
 * @LastEditTime: 2022-02-05 14:44:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /daliy-algorithm-js-/leetCode/5.js
 */

var centerSpread = (str, left, right) => {
  // 双指针判断条件
  while (left >= 0 && right < str.length) {
    if (str[left] === str[right]) {
      left--;
      right++;
    } else {
      break;
    }
  }
  return str.substring(left + 1, right);
};

var longestPalindrome = function (s) {
  // 如果s的length<2的话，那么证明就一个字符，所以直接返回就行了
  let length = s.length;
  if (length < 2) {
    return s;
  }
  // 定义一个结果
  let res = s.substring(0, 1);
  // 初始化最大长度，用于对比for循环中的每一次长度
  let maxLength = 1;
  // 中心扩散法要遍历所有的字符
  for (let i = 0; i < length; i++) {
    // 奇数回文串
    let oddStr = centerSpread(s, i, i);
    // 偶数回文串
    let evenStr = centerSpread(s, i, i + 1);

    let maxStr = oddStr.length > evenStr.length ? oddStr : evenStr;
    if (maxStr.length > maxLength) {
      maxLength = maxStr.length;
      res = maxStr;
    }
  }
  return res;
};

let s = "babad";
console.log(longestPalindrome(s));
