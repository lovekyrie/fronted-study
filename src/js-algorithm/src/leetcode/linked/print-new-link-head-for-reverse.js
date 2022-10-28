/**
 * 输入一个链表，反转链表后，输出新链表的表头。
 */
function printHeadFromReversedLink(head) {
  let cur = head,
    prev = null;
  while (cur) {
    const temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  return prev;
}
