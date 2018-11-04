import Node from "./node";

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  /* 
    Push new value into linked list
   */
  push(val) {
    let newNode = new Node(val);
    if (!this.head) this.head = newNode;
    else {
      let current = this.head;
      while (current.getNext() != null) {
        current = current.getNext();
      }
      current.setNext(newNode);
    }
  }

  /*
    Insert new value in the front of linked list
  */
  insertAtFront(val) {
    let newNode = new Node(val);
    newNode.setNext(this.head);
    this.head = newNode;
  }
  /*
    Insert new value at the given position in linked list
  */
  insertAtPosition(val, pos) {
    if (pos > this.size() + 1) {
      console.log("Cannot insert an element");
      return;
    }
    let newNode = new Node(val);
    let counter = 1;
    let current = this.head;
    if (pos == 1) this.insertAtFront(val);
    else {
      while (counter < pos - 1) {
        current = current.getNext();
        counter++;
      }

      newNode.setNext(current.getNext());
      current.setNext(newNode);
    }
  }

  deleteHead() {
    if (this.head) {
      this.head = this.head.getNext();
    }
  }

  delete() {
    if (this.head) {
      let current = this.head;
      while (current.getNext() && current.getNext().getNext()) {
        current = current.getNext();
      }

      current.setNext(null);
    }
  }

  deleteAtPosition(pos) {
    if (this.head && pos <= this.size()) {
      if (pos == 1) this.head = this.head.getNext();
      else {
        let count = 1;
        let current = this.head;
        while (count < pos - 1) {
          current = current.getNext();
          count++;
        }

        current.setNext(current.getNext().getNext());
      }
    }
  }

  deleteElement(val) {
    let current = this.head;
    let prev = null;

    if (current && current.getValue() == val) {
      this.head = current.getNext();
      return;
    } else {
      while (current && current.getValue() !== val) {
        prev = current;
        current = current.getNext();
      }

      if (current == null) return;

      prev.setNext(current.getNext());
    }
  }

  size() {
    let current = this.head;
    let counter = 0;
    while (current) {
      counter++;
      current = current.getNext();
    }

    return counter;
  }

  getKthLastElement(k) {
    if (k <= this.size()) {
      let temp1 = this.head;
      let temp2 = this.head;
      let counter = 1;
      while (counter != k) {
        temp1 = temp1.getNext();
        counter++;
      }

      while (temp1.getNext()) {
        temp1 = temp1.getNext();
        temp2 = temp2.getNext();
      }

      return temp2.getValue();
    } else {
      return null;
    }
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let temp;
    while (current) {
      temp = current.getNext();
      current.setNext(prev);
      prev = current;
      current = temp;
    }
    this.head = prev;
  }

  recursiveReverse() {
    this.recursiveRev(this.head);
  }

  recursiveRev(current) {
    if (current == null) return;
    if (current.getNext() == null) {
      this.head = current;
      return;
    }

    this.recursiveRev(current.getNext());
    current.getNext().setNext(current);
    current.setNext(null);
  }


  /* 
    Print values of linked list
   */
  print() {
    if (!this.head) console.log("List is empty");
    else {
      let current = this.head;
      while (current != null) {
        console.log(current.getValue());
        current = current.getNext();
      }
    }
  }
}
