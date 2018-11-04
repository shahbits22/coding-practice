/**
 * Sort List
 * https://leetcode.com/problems/sort-list/description/
 * Sort a linked list in O(n log n) time using constant space complexity.

Example 1:
Input: 4->2->1->3
Output: 1->2->3->4

Example 2:
Input: -1->5->3->4->0
Output: -1->0->3->4->5
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  if (!head || !head.next) {
    return head;
  }

  let slow = head;
  let fast = head;
  let prev = null;

  //cut the list in two halves
  while (fast && fast.next) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  prev.next = null;
  let l1 = sortList(head);
  let l2 = sortList(slow);

  //Merge 2 sorted lists
  return merge(l1, l2);
};

function merge(l1, l2) {
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
}
