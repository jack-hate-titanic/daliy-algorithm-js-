class BinarySearchTree {
  constructor() {
    this.size = 0;
    this.root = null;
  }

  add(node) {
    this.nodeNullCheck(node);
    if (!root) {
      this.root = new NodeTree(node);
      this.size++;
      return;
    }

    // 添加的不是第一个节点
    // 添加步骤，找到父节点 ，创建新节点， parent.left=node 或者parent.right=node
    const cmp = this.compare();
  }

  /**
   *
   * @param {*} node1
   * @param {*} node2
   * @returns
   */
  compare(node1, node2) {
    return 0;
  }

  nodeNullCheck(node) {
    if (!node) {
      throw "node must not be null";
    }
  }
}

class NodeTree {
  constructor(node) {
    this.node = node;
    this.left = new NodeTree();
    this.right = new NodeTree();
  }
}
