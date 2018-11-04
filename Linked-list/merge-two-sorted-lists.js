/**
 * Merge Two Sorted Lists
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 * Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

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
var mergeTwoLists = function(l1, l2) {
  let prev = new ListNode(0);
  let head = prev;

  while (l1 && l2) {
    let current = new ListNode(0);

    if (l1.val < l2.val) {
      current.val = l1.val;
      l1 = l1.next;
    } else {
      current.val = l2.val;
      l2 = l2.next;
    }

    prev.next = current;
    prev = current;
  }

  prev.next = l1 ? l1 : l2;

  return head.next;
};
