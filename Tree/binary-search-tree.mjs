import Node from "./node";

export default class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  push(val) {
    if (!this.root) {
      this.root = new Node(val);
      return;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = new Node(val);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = new Node(val);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  pushRecurisve(val) {
    this.root = this.pushRec(this.root, val);
  }

  pushRec(node, val) {
    if (!node) {
      return new Node(val);
    }

    if (val < node.val) {
      node.left = this.pushRec(node.left, val);
    } else {
      node.right = this.pushRec(node.right, val);
    }

    return node;
  }

  search(val) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (val == currentNode.val) return true;
      else if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  searchRecursive(val) {
    return this.searchRec(this.root, val);
  }

  searchRec(node, val) {
    if (!node) {
      return false;
    }
    if (val == node.val) {
      return true;
    } else if (val < node.val) {
      let flag = this.searchRec(node.left, val);
      return flag;
    } else {
      let flag = this.searchRec(node.right, val);
      return flag;
    }
  }

  delete(val) {
    this.root = this.deleteRec(this.root, val);
  }

  deleteRec(node, val) {
    if (!node) return;
    else if (val < node.val) node.left = this.deleteRec(node.left, val);
    else if (val > node.val) node.right = this.deleteRec(node.right, val);
    else {
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.right;
      }

      node.val = this.findMin(node.right);
      node.right = this.deleteRec(node.right, node.val);
    }

    return node;
  }

  findMin(node) {
    if (!node) return;
    while (node.left) {
      node = node.left;
    }
    return node.val;
  }

  print() {
    this.inorderTraversal(this.root);
  }
  inorderTraversal(node) {
    if (!node) {
      return;
    }

    this.inorderTraversal(node.left);
    console.log(node.val);
    this.inorderTraversal(node.right);
  }
}
