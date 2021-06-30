const hasCycle = function (head) {
  if (!head || !head.next) {
    return false;
  }
  let slow = new ListNode(head.val);
  let quick = new ListNode(head.next.val);
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
