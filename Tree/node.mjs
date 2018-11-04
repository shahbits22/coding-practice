export default class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  getValue() {
    return this.val;
  }

  setVal(val) {
    this.val = val;
  }

  getLeft() {
    return this.left;
  }

  setLeft(left) {
    this.left = left;
  }

  getRight() {
    return this.right;
  }

  setRight(right) {
    this.right = right;
  }
}
