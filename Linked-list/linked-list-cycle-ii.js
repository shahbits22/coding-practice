/**
 *  Linked List Cycle II
 * https://leetcode.com/problems/linked-list-cycle-ii/description/
 * Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

Note: Do not modify the linked list.

Follow up:
Can you solve it without using extra space?
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
var detectCycle = function(head) {
  if (!head || !head.next) {
    return null;
  }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow == fast) {
      while (head != slow) {
        head = head.next;
        slow = slow.next;
      }
      return slow;
    }
  }

  return null;
};
