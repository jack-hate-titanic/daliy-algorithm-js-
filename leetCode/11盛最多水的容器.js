const maxArea = function (height) {
  let area = [];
  for (let i = 1; i <= height.length; i++) {
    for (let j = 1; j <= height.length; j++) {
      if (j - i > 0) {
        area.push((j - i) * Math.min(height[i - 1], height[j - 1]));
      }
    }
    area.push(i * height[i]);
  }
  console.log(area);
  return Math.max(...area);
};
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const value = maxArea(height);
console.log(value);

// 使用双指针去思考
