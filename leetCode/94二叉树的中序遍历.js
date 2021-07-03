/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function (root) {
  const arr = [];
  const inOrder = function (root1) {
    // 递归一定要写结束条件
    if (!root1) {
      // 不要在递归中返回值
      return;
    }
    root1?.left && inOrder(root1.left);
    root1?.val && arr.push(root1.val);
    root1.right && inOrder(root1.right);
  };
  inOrder(root);
  return arr;
};
