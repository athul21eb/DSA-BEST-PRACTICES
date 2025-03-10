class TreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const newNode = new TreeNode(value);
		if (!this.root) {
			this.root = newNode;
			return;
		}
		let current = this.root;
		while (true) {
			if (value < current.value) {
				if (!current.left) {
					current.left = newNode;
					return;
				}
				current = current.left;
			} else {
				if (!current.right) {
					current.right = newNode;
					return;
				}
				current = current.right;
			}
		}
	}
	secondLargest() {
		if (!this.root || (!this.root.left && !this.root.right)) {
			return null;
		}
		let curr = this.root;
		let parent = null;
		while (curr.right) {
			parent = curr;
			curr = curr.right;
		}
		if (curr.left) {
			let temp = curr.left;
			while (temp.right) {
				temp = temp.right;
			}
			return temp.value;
		}
		return parent.value;
	}

	findSecondLargest() {
		if (!this.root || (!this.root.left && !this.root.right)) {
			throw new Error("Tree must have at least two nodes.");
		}
		let current = this.root;
		let parent = null;

		// Find the largest node
		while (current.right) {
			parent = current;
			current = current.right;
		}

		// Case 1: If the largest node has a left subtree
		if (current.left) {
			let temp = current.left;
			while (temp.right) {
				temp = temp.right;
			}
			return temp.value;
		}

		// Case 2: The second largest is the parent of the largest node
		return parent.value;
	}
}

let bst = new BinarySearchTree();
bst.insert(20);
bst.insert(10);
bst.insert(30);
bst.insert(25);
bst.insert(40);
bst.insert(35);

console.log("Second Largest Element:", bst.secondLargest()); // Output should be 35
