class TreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class Tree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		let newNode = new TreeNode(value);
		if (this.root === null) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
	}
	insertNode(node, newNode) {
		if (newNode.value < node.value) {
			if (node.left === null) {
				node.left = newNode;
			} else {
				this.insertNode(node.left, newNode);
			}
		} else {
			if (node.right === null) {
				node.right = newNode;
			} else {
				this.insertNode(node.right, newNode);
			}
		}
	}
	search(root, value) {
		if (!root) {
			return false;
		}
		if (value === root.value) {
			return true;
		}
		if (value < root.value) {
			return this.search(root.left, value);
		}
		if (value > root.value) {
			return this.search(root.right, value);
		}
	}
	preeOrder(root) {
		if (root) {
			console.log(root.value);
			this.preeOrder(root.left);
			this.preeOrder(root.right);
		}
	}
	inOrder(root) {
		if (root) {
			this.postOrder(root.left);
			console.log(root.value);
			this.postOrder(root.right);
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
		let queue = [];
		queue.push(this.root);
		while (queue.length) {
			let curr = queue.shift();
			console.log(curr.value);
			if (curr.left) {
				queue.push(curr.left);
			}
			if (curr.right) {
				queue.push(curr.right);
			}
		}
	}
	minValue(root) {
		if (!root.left) {
			return root.value;
		} else {
			return this.minValue(root.left);
		}
	}
	maxValue(root) {
		if (!root.right) {
			return root.value;
		} else {
			return this.maxValue(root.right);
		}
	}
	isBst() {
		return this.bstHelper(this.root, -Infinity, Infinity);
	}
	bstHelper(root, min, max) {
		if (root === null) {
			return true;
		}
		if (root.value <= min || root.value >= max) {
			return false;
		}
		return (
			this.bstHelper(root.left, min, root.value) &&
			this.bstHelper(root.right, root.value, max)
		);
	}
	delete(value) {
		this.root = this.deleteHelper(this.root, value);
	}
	deleteHelper(root, value) {
		if (root === null) {
			return root;
		}
		if (value < root.value) {
			root.left = this.deleteHelper(root.left, value);
		} else if (value > root.value) {
			root.right = this.deleteHelper(root.right, value);
		} else {
			if (!root.left && !root.right) {
				return null;
			} else if (!root.left) {
				return root.right;
			} else if (!root.right) {
				return root.left;
			}
			root.value = this.minValue(root.right);
			root.right = this.deleteHelper(root.right, root.value);
		}
		return root;
	}
	findClosest(target) {
		return this.closest(this.root, target, this.root.value);
	}
	closest(root, target, close) {
		if (root === null) {
			return close;
		}
		if (Math.abs(target - close) > Math.abs(target - root.value)) {
			close = root.value;
		}
		if (target < root.value) {
			return this.closest(root.left, target, close);
		} else if (target > root.value) {
			return this.closest(root.right, target, close);
		} else {
			return close;
		}
	}
}

let tree = new Tree();
tree.insert(10);
tree.insert(8);
tree.insert(15);
tree.insert(7);
tree.insert(9);
tree.insert(13);
tree.insert(18);
console.log(tree.search(tree.root, 10));
console.log("preeOrder");
tree.preeOrder(tree.root);
console.log("postOrder");
tree.postOrder(tree.root);
console.log("inOrder");
tree.inOrder(tree.root);
console.log("Max value ", tree.maxValue(tree.root));
console.log("Min value ", tree.minValue(tree.root));
console.log("is bst", tree.isBst());
tree.delete(10);
console.log("Level order");
tree.levelOrder();
console.log("Closest of ", tree.findClosest(5));
