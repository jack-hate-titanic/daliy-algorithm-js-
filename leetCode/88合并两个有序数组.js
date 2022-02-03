/*
 * @Author: your name
 * @Date: 2022-01-30 11:16:55
 * @LastEditTime: 2022-01-30 11:51:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /daliy-algorithm-js-/leetCode/88合并两个有序数组.js
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let length = m + n - 1;
  let first = m - 1; // 第一排的指针
  let second = n - 1; // 第二排的指针
  // 为什么要 >-1, 如果一排的书对比完以后，指针会变成 - 1，那我们就不用在对比下去了，因为 - 1没有书籍了
  // 为什么要first >-1 && second >-1而不是length>-1,我们一定要和实际联想起来，因为无论是first=-1还是second=-1的时候我们都没办法在进行对比了，所以不能使用length>-1
  while (first > -1 && second > -1) {
    if (nums1[first] > nums2[second]) {
      nums1[length] = nums1[first]; // length这个位置的书籍就给第一排first这个位置的书籍
      length--; // 然后坑位向前挪一下
      first--; // first向前挪动一下
    } else {
      nums1[length] = nums2[second]; // length这个位置的书籍就给第二排second这个位置的书籍
      length--; // 然后坑位向前挪一下
      second--; // first向前挪动一下
    }
  }

  // 如果上面的执行完，可能还会剩下一些书没有被对比，那我们直接把length最前面的位置给了他
  // 如果是第一排的书籍没有被对比完，我们就不用对比了，因为那些书我们不用动位置，所以我们要考虑第二排的书籍有没有被对比完
  while (second > -1) {
    nums1[length] = nums[second];
    second--;
    length--;
  }
};

let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);
