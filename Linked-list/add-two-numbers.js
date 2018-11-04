/**
 * Add two numbers
 * https://leetcode.com/problems/add-two-numbers/description/
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
 */

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
var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let prev = new ListNode(0);
  let head = prev;
  while (l1 != null || l2 != null || carry != 0) {
    let current = new ListNode(0);
    let sum = (l2 == null ? 0 : l2.val) + (l1 == null ? 0 : l1.val) + carry;

    current.val = sum % 10;
    carry = parseInt(sum / 10);
    prev.next = current;
    prev = current;

    l1 = l1 == null ? l1 : l1.next;
    l2 = l2 == null ? l2 : l2.next;
  }

  return head.next;
};
