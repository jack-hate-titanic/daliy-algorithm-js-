/*
 * @Author: your name
 * @Date: 2021-10-24 19:45:36
 * @LastEditTime: 2021-10-26 08:46:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /daliy-algorithm-js-/leetCode/101对称二叉树.js
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }

  const travels = (node, result) => {
    if (!node.left && !node.right) {
      return result === targetSum;
    }

    travels(node.left, node.left ? result + node.left.val : result);
    travels(node.right, node.right ? result + node.right.val : result);
  };
  return travels(root, root.val);
};

let nodes = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(2)),
  new TreeNode(2, new TreeNode(2))
);
console.log(hasPathSum(nodes, 5));
