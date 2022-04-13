/*
 * @Author: your name
 * @Date: 2022-02-05 12:23:20
 * @LastEditTime: 2022-02-08 22:50:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /daliy-algorithm-js-/ceshi.js
 */
let cur = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
    },
  },
};
var a = { n: 1, next: { n: 3 } };
var b = a.next;
a.next = 2;
console.log(b);
