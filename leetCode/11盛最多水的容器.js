// 暴力解法，时间复杂度非常高
// const maxArea = function (height) {
//   let area = [];
//   for (let i = 1; i <= height.length; i++) {
//     for (let j = 1; j <= height.length; j++) {
//       if (j - i > 0) {
//         area.push((j - i) * Math.min(height[i - 1], height[j - 1]));
//       }
//     }
//     area.push(i * height[i]);
//   }
//   console.log(area);
//   return Math.max(...area);
// };

// 使用双指针去思考

const maxArea = function (height) {
  // 定义两个指针
  let first = 0;
  let last = height.length - 1;
  const result = [];
  for (let i = 0; i < height.length; i++) {
    if (height[last] >= height[first]) {
      result.push((last - first) * height[first]);
      first++;
    } else {
      result.push((last - first) * height[last]);
      last--;
    }
  }
  return Math.max(...result);
};

height = [2, 3, 4, 5, 18, 17, 6];
const value = maxArea(height);
console.log(value);
