// 想到的第一个方法是暴力枚举，但是时间复杂度是o(n^2)
//由于哈希查找的时间复杂度为 O(1)，所以可以利用哈希容器 map 降低时间复杂度，以空间换时间
// 才开始使用了两个循环，就是把map的全部遍历出以后，在去查找，这样子不但多了一个循环，而且还要对比两个数的index值是否一样
// 所以直接用一个循环，只要匹配上了，就返回，匹配不上放到map中

var twoSum = function (nums, target) {
  const map = new Map([]);
  for (let j = 0; j < nums.length; j++) {
    if (map.has(target - nums[j])) {
      return [map.get(target - nums[j]), j];
    }
    map.set(nums[j], j);
  }
  return false;
};
const nums = [3, 2, 4],
  target = 6;
console.log(twoSum(nums, target));
