/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  const queue = [];
  queue.push(root);
  const result = [[root.val]];
  let i = 0;
  while (queue.length) {
    const n = queue.length;
    i++;
    result[i] = [];
    for (let j = 0; j < n; j++) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
        result[i].push(node.left.val);
      }
      if (node.right) {
        queue.push(node.right);
        result[i].push(node.right.val);
      }
    }
    if (!result[i].length) {
      result.pop();
    }
  }
  return result;
};
