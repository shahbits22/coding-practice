/**
 * Binary Tree Maximum Path Sum
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/discuss/39775/Accepted-short-solution-in-Java
 * Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6
Example 2:

Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

 let maxValue;
var maxPathSum = function (root) {
    maxValue = Number.NEGATIVE_INFINITY;
    maxPathSumRec(root);
    return maxValue;
};

function maxPathSumRec(node){
    if(!node) return 0;
    let left = Math.max(maxPathSumRec(node.left),0);
    let right = Math.max(maxPathSumRec(node.right), 0);
    maxValue = Math.max(maxValue, left + right + node.val);

    return Math.max(left, right) + node.val;

}

