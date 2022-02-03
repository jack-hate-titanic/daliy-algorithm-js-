// 首先把两数之和的函数拿过来
var twoSum = function (nums, target, j) {
  // 定义另个指针
  // 左指针，为什么不是从零开始，就是为了防止有重复
  let left = j + 1;
  // 右指针
  let right = nums.length - 1;
  let res = [];
  // 双指针，前后有左指针和右指针，所以我们要减2
  while (left < right) {
    // 如果两数之和小于target，那么左指针右移
    if (nums[left] + nums[right] < target) {
      left++;
    } else if (nums[left] + nums[right] > target) {
      // 如果两数之和大于target，那么右指针左移
      right--;
    } else {
      // 结果就是返回两个指针
      res.push([nums[left], nums[right], nums[j]]);
      left++;
      right--;
      while (left < right && nums[left] === nums[left - 1]) {
        left++;
      }
      while (left < right && nums[right] === nums[right + 1]) {
        right--;
      }
    }
  }
  return res;
};

var threeSum = function (nums) {
  // 首先进行排序
  nums.sort((a, b) => {
    return a - b;
  });
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    // 从第一个数开始固定，把nums和target，以及固定的数的下标传给两数之和
    const result = twoSum(nums, 0 - nums[i], i);
    res = res.concat(result);
  }
  console.log(res);
  return res;
};

const res = [-2, 0, 0, 2, 2];
threeSum(res);
