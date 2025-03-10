// 1.bst implimentation

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
		this.root = this.deleteHelper(this.root, value);
	}
	deleteHelper(root, value) {
		if (root === null) {
			return root;
		} else if (value < root.value) {
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
			} else {
				root.value = this.minValue(root.right);
				root.right = this.deleteHelper(root.right, root.value);
			}
		}
		return root;
	}
	preOrder(root) {
		if (root) {
			console.log(root.value);
			this.preOrder(root.left);
			this.preOrder(root.right);
		}
	}
	postOrder(root) {
		if (root) {
			this.postOrder(root.left);
			this.postOrder(root.right);
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
		let queue = [this.root];
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
	findSecondLargest() {
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
	findClosestValue(target) {
		return this.closestValueFinder(this.root, target, this.root.value);
	}
	closestValueFinder(root, target, closest) {
		if (!root) {
			return closest;
		}
		if (Math.abs(target - closest) > Math.abs(target - root.value)) {
			closest = root.value;
		}
		if (target < root.value) {
			return this.closestValueFinder(root.left, target, closest);
		} else if (target > root.value) {
			return this.closestValueFinder(root.right, target, closest);
		} else {
			return closest;
		}
	}
	isBst() {
		return this.isBstHelper(this.root, -Infinity, Infinity);
	}
	isBstHelper(root, min, max) {
		if (!root) {
			return true;
		}
		if (root.value < min || root.value > max) {
			return false;
		}
		return (
			this.isBstHelper(root.left, min, root.value) &&
			this.isBstHelper(root.right, root.value, max)
		);
	}
	countElement(root) {
		if (root === null) {
			return 0;
		}
		return 1 + this.countElement(root.left) + this.countElement(root.right);
	}
	deleteSecondLargest(root) {
		let value = this.minValue(root);
		this.delete(value);
	}
}

let bst = new Bst();
bst.insert(20);
bst.insert(10);
bst.insert(30);
bst.insert(5);
bst.insert(15);
bst.insert(40);
bst.insert(25);
// bst.delete(10);
console.log("The search value is", bst.search(bst.root, 10));
console.log("preOrder is ");
bst.preOrder(bst.root);
console.log("postOrder is ");
bst.postOrder(bst.root);
console.log("inOrder is ");
bst.inOrder(bst.root);
bst.deleteSecondLargest(bst.root);
console.log("levelOrder is ");
bst.levelOrder();
console.log("Second largest value is", bst.findSecondLargest());
console.log("The closest value of 14 is ", bst.findClosestValue(14));
console.log("This bst ", bst.isBst());
console.log("THe count is", bst.countElement(bst.root));

//2. minHeap

class MinHeap {
	constructor() {
		this.heap = [];
	}
	swap(i, j) {
		[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
	}
	parentIndex(i) {
		return Math.floor((i - 1) / 2);
	}
	leftIndex(i) {
		return 2 * i + 1;
	}
	rightIndex(i) {
		return 2 * i + 2;
	}
	insert(value) {
		this.heap[this.heap.length] = value;
		this.heapUp();
	}
	heapUp() {
		let curr = this.heap.length - 1;
		while (curr > 0 && this.heap[curr] < this.heap[this.parentIndex(curr)]) {
			this.swap(curr, this.parentIndex(curr));
			curr = this.parentIndex(curr);
		}
	}
	delete() {
		let value = this.heap[0];
		this.heap[0] = this.heap[this.heap.length - 1];
		this.heap.length--;
		this.heapDown();
		return value;
	}
	heapDown() {
		let curr = 0;
		while (this.heap[this.leftIndex(curr)] !== undefined) {
			let bigIndex = this.leftIndex(curr);
			if (
				this.heap[this.rightIndex(curr)] !== undefined &&
				this.heap[this.rightIndex(curr)] < this.heap[bigIndex]
			) {
				bigIndex = this.rightIndex(curr);
			}
			if (this.heap[bigIndex] < this.heap[curr]) {
				this.swap(curr, bigIndex);
				curr = bigIndex;
			}
		}
	}
}

let minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(20);
minHeap.insert(30);
minHeap.insert(40);
minHeap.insert(50);
console.log("The heap is ", minHeap.heap);
minHeap.delete();
console.log("The heap is after delete ", minHeap.heap);

//3. Heap sort

function heapSort(arr) {
	let n = arr.length;
	for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
		maxHeapyfie(arr, n, i);
	}
	for (let i = n - 1; i > 0; i--) {
		[arr[0], arr[i]] = [arr[i], arr[0]];
		maxHeapyfie(arr, i, 0);
	}
}

function maxHeapyfie(arr, n, i) {
	let largest = i;
	let left = 2 * i + 1;
	let right = 2 * i + 2;
	if (left < n && arr[left] < arr[largest]) {
		largest = left;
	}
	if (right < n && arr[right] < arr[largest]) {
		largest = right;
	}
	if (largest !== i) {
		[arr[i], arr[largest]] = [arr[largest], arr[i]];
		maxHeapyfie(arr, n, largest);
	}
}

let arr = [2, 3, 1, 4, 6, 5];
heapSort(arr);
console.log("The sort arr is ", arr);

//4.Trie impolimentation

class TrieNode {
	constructor() {
		this.childNode = {};
		this.end = false;
	}
}

class Trie {
	constructor() {
		this.root = new TrieNode();
	}
	insert(word) {
		let node = this.root;
		for (let char of word) {
			if (!node.childNode[char]) {
				node.childNode[char] = new TrieNode();
			}
			node = node.childNode[char];
		}
		node.end = true;
	}
	search(word) {
		let node = this.root;
		for (let char of word) {
			if (!node.childNode[char]) {
				return false;
			}
			node = node.childNode[char];
		}
		return node.end;
	}
	delete(word) {
		return this.deleteHelper(this.root, word, 0);
	}
	deleteHelper(root, word, index) {
		if (word.length === index) {
			if (!root.end) return false;
			root.end = false;
			return Object.values(root.childNode).length === 0;
		}
		let char = word[index];
		let child = root.childNode[char];
		if (!child) return false;
		let shouldDelete = this.deleteHelper(child, word, index + 1);
		if (shouldDelete) {
			delete root.childNode[char];
			return Object.values(root.childNode).length === 0 && !root.end;
		}
	}
	start(word) {
		let node = this.root;
		for (let char of word) {
			if (!node.childNode[char]) {
				return false;
			}
			node = node.childNode[char];
		}
		return true;
	}
	find(word) {
		let node = this.root;
		for (let char of word) {
			if (!node.childNode[char]) {
				return false;
			}
			node = node.childNode[char];
		}
		return node;
	}
	autoComplete(word) {
		let node = this.find(word);
		if (!node) {
			return [];
		}
		let result = [];
		function dfs(currNode, prefix) {
			if (currNode.end) {
				result.push(prefix);
			}
			for (let char in currNode.childNode) {
				if (currNode.childNode[char]) {
					dfs(currNode.childNode[char], prefix + char);
				}
			}
		}
		dfs(node, word);
		return result;
	}
}

let trie = new Trie();
trie.insert("app");
trie.insert("apple");
trie.insert("application");
// trie.delete("app");
console.log("The search value is ", trie.search("apple"));
console.log("The prefix value is ", trie.start("p"));
console.log("Auto complete of ", trie.autoComplete("a"));

//4. Graph implimentation

class Graph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = new Set();
		}
	}
	addEdges(vertex1, vertex2) {
		if (!this.adjacencyList[vertex1]) {
			this.addVertex(vertex1);
		}
		if (!this.adjacencyList[vertex2]) {
			this.addVertex(vertex2);
		}
		this.adjacencyList[vertex1].add(vertex2) &&
			this.adjacencyList[vertex2].add(vertex1);
	}
	search(vertex) {
		return !!this.adjacencyList[vertex];
	}
	display() {
		for (let vertex in this.adjacencyList) {
			console.log(`${vertex} -> ${[...this.adjacencyList[vertex]]}`);
		}
	}
	hasEdge(vertex1, vertex2) {
		return (
			this.adjacencyList[vertex1] &&
			this.adjacencyList[vertex2] &&
			this.adjacencyList[vertex1].has(vertex2) &&
			this.adjacencyList[vertex2].has(vertex1)
		);
	}
	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1].delete(vertex2) &&
			this.adjacencyList[vertex2].delete(vertex1);
	}
	removeVertex(vertex) {
		for (let child of this.adjacencyList[vertex]) {
			this.removeEdge(vertex, child);
		}
		delete this.adjacencyList[vertex];
	}
	dfs(start, visited = new Set()) {
		if (!this.adjacencyList[start]) {
			return false;
		}
		console.log(start);
		visited.add(start);
		for (let child of this.adjacencyList[start]) {
			if (!visited.has(child)) {
				this.dfs(child, visited);
			}
		}
	}
	bfs(start) {
		if (!this.adjacencyList[start]) {
			return false;
		}
		let visited = new Set();
		let queue = [start];
		visited.add(start);
		while (queue.length) {
			let vertex = queue.shift();
			console.log(vertex);
			for (let child of this.adjacencyList[vertex]) {
				if (!visited.has(child)) {
					visited.add(child);
					queue.push(child);
				}
			}
		}
	}
	shortestPath(start, target) {
		if (!this.adjacencyList[start] || !this.adjacencyList[target]) {
			return null;
		}
		let queue = [[start]];
		let visited = new Set([start]);
		while (queue.length) {
			let path = queue.shift();
			let vertex = path[path.length - 1];
			if (target === vertex) {
				return path;
			}
			for (let child of this.adjacencyList[vertex]) {
				if (!visited.has(child)) {
					visited.add(child);
					queue.push([...path, child]);
				}
			}
		}
	}
}

let graph = new Graph();
graph.addVertex(10);
graph.addVertex(20);
graph.addVertex(30);
graph.addVertex(40);
graph.addVertex(50);
graph.addEdges(10, 20);
graph.addEdges(20, 30);
graph.addEdges(30, 40);
graph.addEdges(40, 50);
graph.addEdges(50, 20);
graph.display();
// graph.removeEdge(10, 20);
// graph.removeVertex(10);
console.log("the search is ", graph.search(10));
console.log("has edge", graph.hasEdge(10, 20));
console.log("The dfs is ");
graph.dfs(10);
console.log("The bfs is");
graph.bfs(10);
console.log("The shortest path of 10 - 30 is ", graph.shortestPath(10, 30));

class BstNode2 {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class Bst2 {
	constructor() {
		this.root = null;
	}
	insert(value) {
		let newNode = new BstNode2(value);
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
			return this.minValue(root.right);
		}
	}
	delete(value) {
		this.root = this.deleteHelper(this.root, value);
	}
	deleteHelper(root, value) {
		if (!root) {
			return root;
		}
		if (value < root.value) {
			root.left = this.deleteHelper(root.left, value);
		} else if (value > root.value) {
			root.right = this.deleteHelper(root.right, value);
		} else {
			if (!root.left && !root.left) {
				return null;
			} else if (!root.left) {
				return root.right;
			} else if (!root.right) {
				return root.left;
			} else {
				root.value = this.minValue(root.right);
				root.right = this.deleteHelper(root.right, root.value);
			}
		}
		return root;
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
	preOrder(root) {
		if (root) {
			console.log(root.value);
			this.preOrder(root.left);
			this.preOrder(root.right);
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
}

let bst2 = new Bst2();
bst2.insert(20);
bst2.insert(10);
bst2.insert(30);
bst2.insert(5);
bst2.insert(15);
bst2.insert(25);
bst2.insert(35);
console.log("The inorder is ");
bst2.inOrder(bst2.root);
console.log("The postOrder is ");
bst2.postOrder(bst2.root);
console.log("The preor is ");
bst2.preOrder(bst2.root);
console.log("The level order ");
bst2.levelOrder();
console.log("second largest element", bst2.findSecondLargest());
