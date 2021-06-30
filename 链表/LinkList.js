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
    while (currNode && currNode.value !== item) {
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

  append(element) {
    let newNode = new Node(element);
    let currNode = this.findLast();

    currNode.next = newNode;
    this.size++;
  }

  isEmpty() {
    return (this.size = 0);
  }

  getSize() {
    return this.size;
  }

  hasCycle(head) {
    if (!head || !head.next) {
      return false;
    }
    let slow = new Node(head.value);
    let quick = new Node(head.next.value);
    slow.next = head.next;
    quick.next = head.next.next;
    while (quick?.next && slow?.next) {
      if (slow === quick) {
        return true;
      }
      slow = slow.next;
      quick = quick.next.next;
    }
    return false;
  }

  // 参考 https://zhuanlan.zhihu.com/p/105644038
}

const linkList = new LinkList();
linkList.append(1);
linkList.append(2);

console.log(linkList.hasCycle(linkList.head));
