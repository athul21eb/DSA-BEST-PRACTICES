class BstNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class Bst {
	constructor() {
		this.root = null;
	}
	insert(value) {
		let newNode = new BstNode(value);
		if (this.root === null) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
	}
	insertNode(root, newNode) {
		if (newNode.value < root.value) {
			if (root.left === null) {
				root.left = newNode;
			} else {
				this.insertNode(root.left, newNode);
			}
		} else {
			if (root.right === null) {
				root.right = newNode;
			} else {
				this.insertNode(root.right, newNode);
			}
		}
	}
	isBst() {
		return this.bstHelper(this.root, -Infinity, Infinity);
	}
	bstHelper(root, min, max) {
		if (!root) {
			return true;
		}
		if (root.value < min || root.value > max) {
			return false;
		}
		return (
			this.bstHelper(root.left, min, root.value) &&
			this.bstHelper(root.right, root.value, max)
		);
	}
	height(root) {
		if (root === null) {
			return 0;
		}
		let left = 1 + this.height(root.left);
		let right = 1 + this.height(root.right);
		if (left > right) {
			return left;
		}
		if (right > left) {
			return right;
		} else if (right === left) {
			return left;
		}
	}
}

let bst = new Bst();
bst.insert(20);
bst.insert(10);
bst.insert(30);
bst.insert(5);
bst.insert(15);
console.log(bst.isBst());
console.log(bst.height(bst.root));
