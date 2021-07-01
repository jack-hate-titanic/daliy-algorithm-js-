const hasCycle = function (head) {
  if (!head || !head.next) {
    return false;
  }
  // 用节点去比较
  let slow = new ListNode(head.val);
  let quick = new ListNode(head.next.val);
  // 链表一定要记得给next赋值，因为初始化的next为null
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
};
