class Node {
  constructor(v, next) {
    this.value = v;
    this.next = next;
  }
}

class LinkList {
  constructor() {
    this.size = 0;
    // 虚拟头部
    this.header = new Node(null, null);
  }

  find() {}

  checkIndex(index) {
    if (index < 0 || index > this.size) {
      throw Error("index error");
    }
  }

  isEmpty() {
    return (this.size = 0);
  }

  getSize() {
    return this.size();
  }
}
