class Node {
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
		let newNode = new Node(value);
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
			this.minValue(root.left);
		}
	}
	secondLargest() {
		let curr = this.root;
		let parent = null;
		while (curr.right) {
			parent = curr;
			curr = curr.right;
		}
		while (curr.left) {
			let temp = curr.left;
			while (temp.right) {
				temp = temp.right;
			}
			return temp.value;
		}
		return parent.value;
	}
}

let bst = new Bst();
bst.insert(20);
bst.insert(10);
bst.insert(30);
bst.insert(8);
bst.insert(12);
bst.insert(22);

console.log(bst.secondLargest());

class Trie {
	constructor() {
		this.childeren = {};
		this.end = false;
	}
}

class TriePrefix {
	constructor() {
		this.root = new Trie();
	}
	insert(word) {
		let node = this.root;
		for (let char of word) {
			if (!node.childeren[char]) {
				node.childeren[char] = new Trie();
			}
			node = node.childeren[char];
		}
		node.end = true;
	}
	start(prefix) {
		let node = this.root;
		for (let char of prefix) {
			if (!node.childeren[char]) {
				return false;
			}
			node = node.childeren[char];
		}
		return true;
	}
	autoComplition(word) {
		let arr = [];
		let node = this.root;
		for (let char of word) {
			if (node.childeren[char]) {
				arr.push(char);
			}
			node = node.childeren[char];
		}
		return arr.join("");
	}
}

let trie = new TriePrefix();
trie.insert("Apple");
trie.insert("App");
trie.insert("Patch");
trie.insert("Pat");
console.log(trie.start("App"));
console.log(trie.autoComplition("Ap"));

class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = new Set();
		}
	}

	addEdge(vertex1, vertex2) {
		this.addVertex(vertex1);
		this.addVertex(vertex2);
		this.adjacencyList[vertex1].add(vertex2);
		this.adjacencyList[vertex2].add(vertex1);
	}

	shortestPathBFS(start, target) {
		if (!this.adjacencyList[start] || !this.adjacencyList[target]) {
			return null; // One or both vertices not in the graph
		}

		let queue = [[start]];
		let visited = new Set([start]);

		while (queue.length) {
			let path = queue.shift(); // Current path being explored
			let vertex = path[path.length - 1]; // Last node in the path

			// Check if the last node is the target
			if (vertex === target) {
				return path; // Return path as soon as we find the target
			}

			// Explore neighbors
			for (let neighbor of this.adjacencyList[vertex]) {
				if (!visited.has(neighbor)) {
					visited.add(neighbor);
					queue.push([...path, neighbor]); // Append neighbor to the path
				}
			}
		}
		return null; // Return null if no path is found
	}
}

// Example usage:
let graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");

console.log("Shortest Path from A to E:", graph.shortestPathBFS("A", "E"));
