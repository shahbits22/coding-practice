import BinarySearchTree from "./binary-search-tree";

let bst = new BinarySearchTree();
bst.push(1);
bst.push(2);
bst.push(7);
bst.pushRecurisve(10);
bst.pushRecurisve(5);
bst.delete(2);
bst.delete(1);
bst.print();
console.log(bst.search(5));
console.log(bst.search(55));
console.log(bst.searchRecursive(5));
//console.log(bst.searchRecursive(55));
