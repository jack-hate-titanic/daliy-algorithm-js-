/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 时间
var intersection = function (nums1, nums2) {
  let a = new Set(nums1);
  let b = new Set(nums2);
  let result = new Set([...a].filter((x) => b.has(x)));
  return Array.from(result);
};

const result = intersection([1, 2, 2, 1], [2, 2]);
console.log(result);
