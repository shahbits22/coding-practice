export default class Node {
  constructor(val) {
    this.next = null;
    this.val = val;
  }

  getNext() {
    return this.next;
  }

  setNext(node) {
    this.next = node;
  }

  getValue() {
    return this.val;
  }

  setValue(val) {
    this.val = val;
  }
}
