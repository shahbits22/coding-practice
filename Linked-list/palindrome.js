/**
 *  Palindrome Linked List
 * https://leetcode.com/problems/palindrome-linked-list/description/
 * Given a singly linked list, determine if it is a palindrome.

Example 1:
Input: 1->2
Output: false

Example 2:
Input: 1->2->2->1
Output: true

Follow up:
Could you do it in O(n) time and O(1) space?
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let prev = null;
    let slow = head;
    let fast = head;
    let list1 = head;
    if(!head || !head.next){
        return true;
    }else{
         while(fast && fast.next){
             fast = fast.next.next;
             prev = slow;
             slow = slow.next
         }

         if(!fast.next) slow = slow.next; //odd numbers ->skip middle element
         prev.next = null; // break into two halves
         let list2 = reverse(slow);

         while(list1 & list2){
             if(list1.val !== list2.val){
                 return false;
             }
             list1 = list1.next;
             list2 = list2.next;
         }

         return true;
    }
};

function reverse(head){
    let prev = null;
    let current = head;
    if(!head || !head.next){
        return head;
    }

    while(current){
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }

    return prev;
}