class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinerySearchTree {
	constructor() {
		this.root = null;
	}
	isEmpty() {
		return this.root === null;
	}
	insert(value) {
		let newNode = new Node(value);
		if (this.isEmpty()) {
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
	search(root, value) {
		if (!root) {
			return false;
		}

		if (root.value === value) {
			return true;
		}

		if (value < root.value) {
			return this.search(root.left, value);
		}

		return this.search(root.right, value);
	}

	preOreder(root) {
		if (root) {
			console.log(root.value);
			this.preOreder(root.left);
			this.preOreder(root.right);
		}
	}
	postOreder(root) {
		if (root) {
			this.postOreder(root.left);
			this.postOreder(root.right);
			console.log(root.value);
		}
	}
	inOrder(root) {
		if (root) {
			this.inOrder(root.left);
			console.log(root.value);
			this.inOrder(root.right);
		}
	}

	//bfs
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
	deleete(value) {
		this.root = this.deleeteNode(this.root, value);
	}
	deleeteNode(root, value) {
		if (root === null) {
			return root;
		} else if (value < root.value) {
			root.left = this.deleeteNode(root.left, value);
		} else if (value > root.value) {
			root.right = this.deleeteNode(root.right, value);
		} else {
			if (!root.left && !root.right) {
				return null;
			}
			if (!root.left) {
				return root.right;
			} else if (!root.right) {
				return root.left;
			}
			root.value = this.minValue(root.right);
			root.right = this.deleeteNode(root.right, root.value);
		}
		return root;
	}

	findClosestValue(target) {
		return this.closestHelper(this.root, target, this.root.value);
	}
	closestHelper(root, target, closest) {
		if (root === null) {
			return closest;
		}
		if (Math.abs(target - closest) > Math.abs(target - root.value)) {
			closest = root.value;
		}
		if (target < root.value) {
			return this.closestHelper(root.left, target, closest);
		} else if (target > root.value) {
			return this.closestHelper(root.right, target, closest);
		} else {
			return closest;
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
}

let bst = new BinerySearchTree();
console.log("bst is ", bst.isEmpty());
bst.insert(1);
bst.insert(15);
bst.insert(5);
bst.insert(3);
console.log("bst search is", bst.search(bst.root, 100));
console.log(bst.findClosestValue(4));
console.log("is bst ", bst.isBst());

//

class Node1 {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinerySearchTree1 {
	constructor() {
		this.root = null;
	}
	isEmpty() {
		return this.root === null;
	}
	insert(value) {
		let newNode = new Node1(value);
		if (this.isEmpty()) {
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
	search(root, value) {
		if (!root) {
			return false;
		} else {
			if (root.value === value) {
				return true;
			} else {
				if (value < root.value) {
					return this.search(root.left, value);
				} else {
					return this.search(root.right, value);
				}
			}
		}
	}
	preOreder(root) {
		if (root) {
			console.log(root.value);
			this.preOreder(root.left);
			this.preOreder(root.right);
		}
	}
	postOreder(root) {
		if (root) {
			this.postOreder(root.left);
			this.postOreder(root.right);
			console.log(root.value);
		}
	}
	inOrder(root) {
		if (root) {
			this.inOrder(root.left);
			console.log(root.value);
			this.inOrder(root.right);
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
	maxValue(root) {
		if (!root.right) {
			return root.value;
		} else {
			return this.maxValue(root.right);
		}
	}
	minValue(root) {
		if (!root.left) {
			return root.value;
		} else {
			return this.minValue(root.left);
		}
	}
	deleete(value) {
		this.root = this.deleeteNode(this.root, value);
	}
	deleeteNode(root, value) {
		if (root === null) {
			return root;
		} else if (value < root.value) {
			root.left = this.deleeteNode(root.left, value);
		} else if (value > root.value) {
			root.right = this.deleeteNode(root.right, value);
		} else {
			if (!root.left && !root.right) {
				return null;
			} else if (!root.left) {
				return root.right;
			} else if (!root.right) {
				return root.left;
			}
			root.value = this.minValue(root.right);
			root.right = this.deleeteNode(root.right, root.value);
		}
		return root;
	}
}

let bst1 = new BinerySearchTree1();
bst1.insert(10);
bst1.insert(20);
bst1.insert(5);
bst1.insert(3);
console.log("bst1 is", bst1.search(bst1.root, 10));
console.log("bst1 preorder is");
bst1.preOreder(bst1.root);
console.log("bst1 postorder is");
bst1.postOreder(bst1.root);
console.log("bst1 inorder is");
bst1.inOrder(bst1.root);
console.log("the level order is");
bst1.levelOrder();
console.log("max vaslue", bst1.maxValue(bst1.root));
console.log("min value", bst1.minValue(bst1.root));
bst1.deleete(10);
bst1.levelOrder();

class Node2 {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinerySearchTree2 {
	constructor() {
		this.root = null;
	}
	insert(value) {
		let newNode = new Node2(value);
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
	search(root, value) {
		if (!root) {
			return false;
		}
		if (root.value === value) {
			return true;
		}
		if (value < root.value) {
			return this.search(root.left, value);
		}

		return this.search(root.right, value);
	}
	preOreder(root) {
		if (root) {
			console.log(root.value);
			this.preOreder(root.left);
			this.preOreder(root.right);
		}
	}
	postOreder(root) {
		if (root) {
			this.postOreder(root.left);
			this.postOreder(root.right);
			console.log(root.value);
		}
	}
	inOrder(root) {
		if (root) {
			this.inOrder(root.left);
			console.log(root.value);
			this.inOrder(root.right);
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
	maxValue(root) {
		if (!root.right) {
			return root.value;
		} else {
			return this.maxValue(root.right);
		}
	}
	minValue(root) {
		if (!root.left) {
			return root.value;
		} else {
			return this.minValue(root.left);
		}
	}
	delete(value) {
		this.root = this.deleteNode(this.root, value);
	}
	deleteNode(root, value) {
		if (root === null) {
			return root;
		} else if (value < root.value) {
			root.left = this.deleteNode(root.left, value);
		} else if (value > root.value) {
			root.right = this.deleteNode(root.right, value);
		} else {
			if (!root.left && !root.right) {
				return null;
			} else if (!root.left) {
				return root.right;
			} else if (!root.right) {
				return root.left;
			}
			root.value = this.minValue(root.right);
			root.right = this.deleteNode(root.right, root.value);
		}
		return root;
	}
	closest(target) {
		return this.closestHelper(this.root, target, this.root.value);
	}
	closestHelper(root, target, closest) {
		if (root === null) {
			return closest;
		}
		if (Math.abs(target - closest) > Math.abs(target - root.value)) {
			closest = root.value;
		}
		if (target < root.value) {
			return this.closestHelper(root.left, target, closest);
		} else if (target > root.value) {
			return this.closestHelper(root.right, target, closest);
		} else {
			return closest;
		}
	}
	countNode(root) {
		if (root === null) {
			return 0;
		}
		return 1 + this.countNode(root.left) + this.countNode(root.right);
	}
}

let bst2 = new BinerySearchTree2();
bst2.insert(10);
bst2.insert(5);
bst2.insert(15);
bst2.insert(3);
bst2.insert(7);
bst2.insert(12);
bst2.insert(18);
console.log("bst 2 search is ", bst2.search(bst2.root, 5));
console.log("pre order bst2 is");
bst2.preOreder(bst2.root);
console.log("post order bst2 is");
bst2.postOreder(bst2.root);
console.log("inorder order bst2 is");
bst2.inOrder(bst2.root);
console.log("is bst or not ", bst2.isBst());
console.log("Max value is ", bst2.minValue(bst2.root));
bst2.delete(10);
console.log("Level order bst2 is");
bst2.levelOrder();
console.log("The closest value of ", bst2.closest(4));
console.log("Count of elements is =", bst2.countNode(bst2.root));

// 3.

class Node3 {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class Bfs3 {
	constructor() {
		this.root = null;
	}
	insert(value) {
		let newNode = new Node3(value);
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
	search(root, value) {
		if (!root) {
			return false;
		}
		if (value === root.value) {
			return true;
		}
		if (value < root.value) {
			return this.search(root.left, value);
		} else {
			return this.search(root.right, value);
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
	deleete(value) {
		this.root = this.deleeteNode(this.root, value);
	}
	deleeteNode(root, value) {
		if (root === null) {
			return root;
		} else if (value < root.value) {
			root.left = this.deleeteNode(root.left, value);
		} else if (value > root.value) {
			root.right = this.deleeteNode(root.right, value);
		} else {
			if (!root.left && !root.right) {
				return null;
			} else if (!root.left) {
				return root.right;
			} else if (!root.right) {
				return root.left;
			}
			root.value = this.minValue(root.right);
			root.right = this.deleeteNode(root.right, root.value);
		}
		return root;
	}
	preOreder(root) {
		if (root) {
			console.log(root.value);
			this.preOreder(root.left);
			this.preOreder(root.right);
		}
	}
	postOreder(root) {
		if (root) {
			this.postOreder(root.left);
			this.postOreder(root.right);
			console.log(root.value);
		}
	}
	inOrder(root) {
		if (root) {
			this.inOrder(root.left);
			console.log(root.value);
			this.inOrder(root.right);
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
	findClosestValue(target) {
		return this.closestHelper(this.root, target, this.root.value);
	}
	closestHelper(root, target, closest) {
		if (root === null) {
			return closest;
		}
		if (Math.abs(target - closest) > Math.abs(target - root.value)) {
			closest = root.value;
		}
		if (target < root.value) {
			return this.closestHelper(root.left, target, closest);
		} else if (target > root.value) {
			return this.closestHelper(root.right, target, closest);
		} else {
			return closest;
		}
	}
}

let bfs3 = new Bfs3();
console.log("Bfs 3");
bfs3.insert(20);
bfs3.insert(10);
bfs3.insert(30);
bfs3.insert(8);
bfs3.insert(15);
bfs3.insert(40);
bfs3.insert(25);
console.log(bfs3.search(bfs3.root, 10));
console.log("pre order ");
bfs3.preOreder(bfs3.root);
console.log("post order ");
bfs3.postOreder(bfs3.root);
console.log("inorder order ");
bfs3.inOrder(bfs3.root);
bfs3.deleete(20);
console.log("Level order");
bfs3.levelOrder();
console.log(bfs3.isBst());
console.log("closest is ", bfs3.findClosestValue(11));

// 4.

class Node4 {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinerySearchTree4 {
	constructor() {
		this.root = null;
	}
	insert(value) {
		let newNode = new Node4(value);
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
	remove(value) {
		this.root = this.removeHelper(this.root, value);
	}

	removeHelper(root, value) {
		if (!root) {
			return root;
		}
		if (value < root.value) {
			root.left = this.removeHelper(root.left, value);
		} else if (value > root.value) {
			root.right = this.removeHelper(root.right, value);
		} else {
			if (!root.left && !root.right) {
				return null;
			}
			if (!root.left) {
				return root.right;
			} else if (!root.right) {
				return root.left;
			} else {
				root.value = this.minValue(root.right);
				root.right = this.removeHelper(root.right, root.value);
			}
		}
		return root;
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
		} else {
			return this.search(root.right, value);
		}
	}
	preOreder(root) {
		if (root) {
			console.log(root.value);
			this.preOreder(root.left);
			this.preOreder(root.right);
		}
	}
	postOreder(root) {
		if (root) {
			this.postOreder(root.left);
			this.postOreder(root.right);
			console.log(root.value);
		}
	}
	inOrder(root) {
		if (root) {
			this.inOrder(root.left);
			console.log(root.value);
			this.inOrder(root.right);
		}
	}
	levelOrder() {
		let queue = [];
		queue.push(this.root);
		while (queue.length > 0) {
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
	isBst() {
		return this.bstHelper(this.root, -Infinity, Infinity);
	}
	bstHelper(root, min, max) {
		if (!root) {
			return true;
		} else {
			if (root.value <= min || root.value >= max) {
				return false;
			}
			return (
				this.bstHelper(root.left, min, root.value) &&
				this.bstHelper(root.right, root.value, max)
			);
		}
	}
	findClosestValue(target) {
		return this.closestHelper(this.root, target, this.root.value);
	}
	closestHelper(root, target, closest) {
		if (!root) {
			return closest;
		}
		if (Math.abs(target - closest) > Math.abs(target - root.value)) {
			closest = root.value;
		}
		if (target < root.value) {
			return this.closestHelper(root.left, target, closest);
		} else if (target > root.value) {
			return this.closestHelper(root.right, target, closest);
		} else {
			return closest;
		}
	}
	findSecondLargest() {
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
	findSecondSmallest() {
		let curr = this.root;
		let parent = null;
		while (curr.left) {
			parent = curr;
			curr = curr.left;
		}
		if (curr.right) {
			let temp = curr.right;
			while (temp.left) {
				temp = temp.left;
			}
			return temp.value;
		}
		return parent.value;
	}
}

let bst4 = new BinerySearchTree4();
console.log("bst 4 is ");
bst4.insert(20);
bst4.insert(15);
bst4.insert(30);
bst4.insert(10);
bst4.insert(21);
bst4.insert(25);
bst4.insert(35);
console.log("the search", bst4.search(bst4.root, 10));
console.log("The post order is");
bst4.postOreder(bst4.root);
console.log("The pre order is");
bst4.preOreder(bst4.root);
console.log("The in order is");
bst4.inOrder(bst4.root);
console.log("Level order is ");
bst4.levelOrder();
console.log("max value is ", bst4.maxValue(bst4.root));
console.log("min value is ", bst4.minValue(bst4.root));
console.log("After delete");
// bst4.remove(10);
// bst4.levelOrder();
console.log("Is bst or not ", bst4.isBst());
console.log("The closest value is ", bst4.findClosestValue(22));
console.log("The second largest value is", bst4.findSecondLargest());
console.log("The second smallest value is", bst4.findSecondSmallest());

// 5.

class Node5 {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinerySearchTree5 {
	constructor() {
		this.root = null;
	}
	insert(value) {
		let newNode = new Node5(value);
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
	search(root, value) {
		if (!root) {
			return false;
		}
		if (root.value === value) {
			return true;
		}
		if (value < root.value) {
			return this.search(root.left, value);
		} else {
			return this.search(root.right, value);
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
	deleete(value) {
		this.root = this.deleeteNode(this.root, value);
	}
	deleeteNode(root, value) {
		if (!root) {
			return null;
		} else if (value < root.value) {
			root.left = this.deleeteNode(root.left, value);
		} else if (value > root.value) {
			root.right = this.deleeteNode(root.right, value);
		} else {
			if (!root.left && !root.right) {
				return null;
			} else if (!root.right) {
				return root.left;
			} else if (!root.left) {
				return root.right;
			} else {
				root.value = this.minValue(root.right);
				root.right = this.deleeteNode(root.right, root.value);
			}
		}
		return root;
	}
	preOreder(root) {
		if (root) {
			console.log(root.value);
			this.preOreder(root.left);
			this.preOreder(root.right);
		}
	}
	postOreder(root) {
		if (root) {
			this.postOreder(root.left);
			this.postOreder(root.right);
			console.log(root.value);
		}
	}
	inOrder(root) {
		if (root) {
			this.inOrder(root.left);
			console.log(root.value);
			this.inOrder(root.right);
		}
	}
	levelOrder() {
		if (!this.root) return null;
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
	isBst() {
		return this.bstHelper(this.root, -Infinity, Infinity);
	}
	bstHelper(root, min, max) {
		if (root === null) {
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
	findClosestValue(value) {
		return this.closestValue(this.root, value, this.root.value);
	}
	closestValue(root, target, closest) {
		if (root === null) {
			return closest;
		}
		if (Math.abs(target - closest) > Math.abs(target - root.value)) {
			closest = root.value;
		}
		if (target < root.value) {
			return this.closestValue(root.left, target, closest);
		} else if (target > root.value) {
			return this.closestValue(root.right, target, closest);
		} else {
			return closest;
		}
	}
	findSecondLargest() {
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
	countNode(root) {
		if (root === null) {
			return 0;
		}
		return 1 + this.countNode(root.left) + this.countNode(root.right);
	}
}

let bst5 = new BinerySearchTree5();
console.log("The bst 5 is ");
bst5.insert(20);
bst5.insert(10);
bst5.insert(30);
bst5.insert(5);
bst5.insert(15);
bst5.insert(25);
bst5.insert(35);
// bst5.deleete(15);
console.log("Search value is ", bst5.search(bst5.root, 15));
console.log("Post order is ");
bst5.postOreder(bst5.root);
console.log("pre order is ");
bst5.preOreder(bst5.root);
console.log("in order is ");
bst5.inOrder(bst5.root);
console.log("level order is ");
bst5.levelOrder();
console.log("is bst ", bst5.isBst());
console.log("The closest value is ", bst5.findClosestValue(14));
console.log("The second largest values is ", bst5.findSecondLargest());
console.log("The number of node is ", bst5.countNode(bst5.root));
console.log("the depth is ");
