/*
 * @Author: your name
 * @Date: 2021-10-30 10:57:11
 * @LastEditTime: 2021-10-30 11:36:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /daliy-algorithm-js-/leetCode/226翻转二叉树.js
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var invertTree = function (root) {
  if (!root) {
    return null;
  }
  let newRoot = new TreeNode(root.val);
  newRoot.left = root.right;
  newRoot.right = root.left;
  newRoot.left = invertTree(newRoot.left);
  newRoot.right = invertTree(newRoot.right);
  return newRoot;
};

//写递归第一要思考结束条件，比如这道题，结束条件就是节点为空，为空返回零
let nodes = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(6)),
  new TreeNode(4, new TreeNode(5), new TreeNode(7))
);
console.log(invertTree(nodes));
