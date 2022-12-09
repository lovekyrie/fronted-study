/*
 * 输入一个链表，输出该链表中倒数第k个结点。
 */
function findKthToTail(head, k) {
  if (!head || !k) return null;
  let prev = head;
  let next = head;
  let index = 1;
  while (prev.next) {
    index++;
    prev = prev.next;
    if (index > k) {
      next = next.head;
    }
  }
  return k <= index && next;
}
