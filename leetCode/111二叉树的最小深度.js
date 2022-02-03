/*
 * @Author: your name
 * @Date: 2021-10-30 12:06:23
 * @LastEditTime: 2021-10-30 12:34:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /daliy-algorithm-js-/leetCode/111二叉树的最小深度.js
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  if (!root.left) {
    return minDepth(root.right) + 1;
  }
  if (!root.right) {
    return minDepth(root.left) + 1;
  }
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

//写递归第一要思考结束条件，比如这道题，结束条件就是节点为空，为空返回零
let nodes = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3, new TreeNode(4))),
  new TreeNode(2, new TreeNode(4, new TreeNode(5)))
);
console.log(minDepth(nodes));
