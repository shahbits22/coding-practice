function printAncestors(root, target) {
  if (!root) return false;
  else if (root.val == target) return true;
  else if (
    printAncestors(root.left, target) ||
    printAncestors(root.right, target)
  ) {
    console.log(root.val);
    return true;
  }
  return false;
}
