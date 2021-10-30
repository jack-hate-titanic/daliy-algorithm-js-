/*
 * @Author: your name
 * @Date: 2021-10-30 09:47:18
 * @LastEditTime: 2021-10-30 10:39:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /daliy-algorithm-js-/leetCode/104二叉树的最大深度.js
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

//写递归第一要思考结束条件，比如这道题，结束条件就是节点为空，为空返回零
let nodes = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(2)),
  new TreeNode(2, new TreeNode(2))
);
console.log(maxDepth(nodes));
