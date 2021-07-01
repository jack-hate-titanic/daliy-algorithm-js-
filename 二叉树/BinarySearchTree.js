class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  addNode(v) {
    this.root = this._addChild(this.root, v);
  }

  // 添加节点时，需要比较添加的节点值和当前节点值大小
  _addChild(node, v) {
    if (!node) {
      this.size++;
      return new Node(v);
    }
    if (node.value > v) {
      node.left = this._addChild(node.left, v);
    } else if (node.value < v) {
      node.right = this._addChild(node.right, v);
    }
    return node;
  }

  preTraversal() {
    this._pre(this.root);
  }

  _pre(node) {
    node.value && console.log(node.value);
    node?.left && this._pre(node.left);
    node?.right && this._pre(node.right);
  }
}

const bst = new BST();
bst.addNode(6);
bst.addNode(5);
bst.addNode(7);

bst.preTraversal();
