/*
 * @Author: your name
 * @Date: 2022-04-11 21:24:39
 * @LastEditTime: 2022-04-13 22:11:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /daliy-algorithm-js-/34.ts
 */
function leftBound(nums: number[], target: number):number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    // 相等不返回，而是在减小区间
    if (nums[mid] === target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  // 查询左边界判断左边界
  if (left >= nums.length-1 || nums[left] !== target) {
    return -1;
  }
  // 查询左边界返回左
  return left;
}

function right_bound(nums:number[],target:number):number{
  let left = 0;
  let right = nums.length-1;
  while(left<=right){
      let mid = left + Math.floor((right-left)/2);
    if (nums[mid] === target) {
          left = mid + 1;
      }else if(nums[mid]<target){
          left = mid + 1;
      }else if(nums[mid]>target){
          right = mid - 1;
      }
  }
  // 查询右边界看右边界是否越界
  if (right < 0 || nums[right] !== target) {
    return -1;
  }
  // 查询右边界返回右
  return right;
}

let nums = [1, 5, 7, 7, 7, 9];
let target = 7;
console.log(leftBound(nums,target));