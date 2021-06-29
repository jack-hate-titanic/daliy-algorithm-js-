class Node {
  constructor(v) {
    this.value = v;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.size = 0;
    // 虚拟头部
    this.head = new Node("head");
  }

  find(item) {
    let currNode = this.head;
    while (currNode && currNode.data !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  findLast() {
    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    return currNode;
  }

  checkIndex(index) {
    if (index < 0 || index > this.size) {
      throw Error("index error");
    }
  }

  append(element) {}

  isEmpty() {
    return (this.size = 0);
  }

  getSize() {
    return this.size();
  }

  // 参考
}
