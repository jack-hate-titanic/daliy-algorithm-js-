var removeDuplicates = function (nums) {
  if (!nums.length) {
    return nums;
  }
  let first = 0;
  nums[first] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[first] !== nums[i]) {
      first++;
      nums[first] = nums[i];
    }
  }
  return first + 1;
};

const nums = [1, 1, 2];
console.log(removeDuplicates(nums));
// 本题也是双指针思想，双指针思想适用于计算面积，计算数组
