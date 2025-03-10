class treeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
    this.length = 0;
  }

  enqueue(value) {
    this.items[this.rear++] = value;
    this.length++;
  }
  dequeue() {
    if (this.front === this.rear) {
      console.log("queue is empty");
      return undefined;
    }
    let removedValue = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    this.length--;
    return removedValue;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new treeNode(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this._insertNodeHelper(this.root, newNode);
    }
  }

  _insertNodeHelper(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this._insertNodeHelper(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this._insertNodeHelper(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (root === null) {
      return false;
    } else if (root.value === value) {
      return true;
    } else {
      if (root.value > value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);

      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder() {
    const queue = new Queue();
    queue.enqueue(this.root);
    while (queue.length) {
      let curr = queue.dequeue();
      console.log(curr.value);
      if (curr.left) {
        queue.enqueue(curr.left);
      }
      if (curr.right) {
        queue.enqueue(curr.right);
      }
    }
  }

  min(root) {
    if (root.left === null) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }
  max(root) {
    if (root.right === null) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this._deleteHelper(this.root, value);
  }

  _deleteHelper(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this._deleteHelper(root.left, value);
    } else if (value > root.value) {
      root.right = this._deleteHelper(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      }
      if (!root.right) {
        return root.left;
      }
     

      root.value = this.min(root.right);

      root.right = this._deleteHelper(root.right, root.value);
    }

    return root;
  }

  FindClosest(target) {
    let root = this.root;
    if (!root) return null;

    let Closest = -Infinity;
    while (root !== null) {
      if (Math.abs(target - root.value) < Math.abs(target - Closest)) {
        Closest = root.value;
      }
      if (root.value < target) root = root.right;
      else if (root.value > target) root = root.left;
      else break;
    }
    return Closest;
  }

  isBst(root = this.root, min = -Infinity, max = Infinity) {
    if (!root) return true;

    if (root.value <= min || root.value >= max) return false;

    return (
      this.isBst(root.left, min, root.value) &&
      this.isBst(root.right, root.value, max)
    );
  }

  findSecondLargest() {
    if (!this.root || (!this.root.left && !this.root.right)) return null;

    let parent = null;
    let current = this.root;
    while (current.right) {
      parent = current;
      current = current.right;
    }

    if (current.left) {
      let max = current.left;
      while (max.right) max = max.right;
      return max.value;
    }

    return parent.value;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(14);
bst.insert(3);
bst.insert(7);
bst.insert(6);
bst.insert(8);
bst.insert(0);
// console.log(bst.search(bst.root, 7));
// console.log(bst.search(bst.root, 8));
// console.log(bst.search(bst.root, 10));
// console.log("=========preOrder========");
// bst.preOrder(bst.root);
// console.log("=========InOrder========");
// bst.inOrder(bst.root);
// console.log("=====postOrder===========");
// bst.postOrder(bst.root);
console.log("=========levelOrder=======");
bst.levelOrder();
// console.log("min = ", bst.min(bst.root));
// console.log("max =", bst.max(bst.root));
bst.delete(10);
console.log("=========levelOrder=======");
bst.levelOrder();
console.log("Closest Value =>", bst.FindClosest(5));

console.log("Is it Bst =>", bst.isBst());
console.log(bst.root.value);
console.log("find SecondLargestArray =>", bst.findSecondLargest());
