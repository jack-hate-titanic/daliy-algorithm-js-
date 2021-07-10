class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const isSameTree = function (p, q) {
  if (!p || !q) {
    return false;
  }
  let result = true;
  const inOrderTraversal = function (p1, q1) {
    if (!p1 && !q1) {
      return;
    }
    if ((p1 && !q1) || (!p1 && q1)) {
      result = false;
      return;
    }
    if (p1.value !== q1.value) {
      result = false;
      return;
    }
    inOrderTraversal(p1.left, q1.left);
    inOrderTraversal(p1.right, q1.right);
  };
  inOrderTraversal(p, q);
  return result;
};

const p = new Node();
const q = new Node();
console.log(isSameTree(p, q));
