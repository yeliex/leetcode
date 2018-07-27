/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;

  const res = new ListNode();
  let current = res;

  while (l1.val !== undefined || l2.val !== undefined) {
    if (current.val !== undefined) {
      current = current.next = new ListNode();
    }
    const v1 = l1.val || 0;
    const v2 = l2.val || 0;

    const sum = v1 + v2 + carry;
    carry = 0;

    if (sum >= 10) {
      current.val = sum - 10;
      carry = 1;
    } else {
      current.val = sum;
    }
    l1 = l1.next || {};
    l2 = l2.next || {};
  }

  if (carry) {
    current.next = new ListNode(1);
  }

  return res;
};
