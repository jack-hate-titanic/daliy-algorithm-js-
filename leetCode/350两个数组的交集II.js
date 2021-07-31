/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let m = new Map();
  let result = [];

  for (let i = 0; i < nums1.length; i++) {
    let value = m.get(nums1[i]);
    m.set(nums1[i], value ? value + 1 : 1);
  }
  console.log(m);
  for (let i = 0; i < nums2.length; i++) {
    let value = m.get(nums2[i]);
    if (value > 0) {
      result.push(nums2[i]);
      m.set(nums2[i], value - 1);
    }
  }
  return result;
};

const arr = intersect([4, 9, 5], [9, 4, 9, 8, 4]);
console.log(arr);
