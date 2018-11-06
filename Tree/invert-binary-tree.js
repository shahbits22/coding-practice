/**
 * Invert Binary Tree
 * https://leetcode.com/problems/invert-binary-tree/description/
 * Input:
 *    4
   /   \
  2     7
 / \   / \
1   3 6   9

Output:
    4
   /  \
  7     2
 / \   / \
9   6 3   1
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return null;

  invertTree(root.right);
  invertTree(root.left);

  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  return root;
};
