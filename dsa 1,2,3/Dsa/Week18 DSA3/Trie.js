class TrieNode {
	constructor() {
		this.children = {};
		this.endOfWord = false;
	}
}

class Trie {
	constructor() {
		this.root = new TrieNode();
	}
	insert(word) {
		let node = this.root;
		for (let char of word) {
			if (!node.children[char]) {
				node.children[char] = new TrieNode();
			}
			node = node.children[char];
		}
		node.endOfWord = true;
	}
	search(word) {
		let node = this.root;
		for (let char of word) {
			if (!node.children[char]) {
				return false;
			}
			node = node.children[char];
		}
		return node.endOfWord;
	}
	startWith(prefix) {
		let node = this.root;
		for (let char of prefix) {
			if (!node.children[char]) {
				return false;
			}
			node = node.children[char];
		}
		return true;
	}
	delete(word) {
		this.deleteHelper(this.root, word, 0);
	}
	deleteHelper(node, word, index) {
		if (index === word.length) {
			if (!node.endOfWord) return false;
			node.endOfWord = false;
			return Object.values(node.children).length === 0;
		}
		let char = word[index];
		let childeNode = node.children[char];
		if (!childeNode) return false;
		let shoudDelete = this.deleteHelper(childeNode, word, index + 1);
		if (shoudDelete) {
			delete node.children[char];
			return Object.values(node.children).length === 0 && !node.endOfWord;
		}
		return false;
	}
}

let trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("bat");
console.log(trie.search("app"));
console.log(trie.startWith("appl"));
trie.delete("apple");
console.log(trie.search("app"));

// 2.

class TrieNode2 {
	constructor() {
		this.children = {};
		this.end = false;
	}
}

class Trie2 {
	constructor() {
		this.root = new TrieNode2();
	}
	insert(word) {
		let node = this.root;
		for (let char of word) {
			if (!node.children[char]) {
				node.children[char] = new TrieNode2();
			}
			node = node.children[char];
		}
		node.end = true;
	}
	search(word) {
		let node = this.root;
		for (let char of word) {
			if (!node.children[char]) {
				return false;
			}
			node = node.children[char];
		}
		return node.end;
	}
	start(prefix) {
		let node = this.root;
		for (let char of prefix) {
			if (!node.children[char]) {
				return false;
			}
			node = node.children[char];
		}
		return true;
	}
	delete(word) {
		this.deleteHelper(this.root, word, 0);
	}
	deleteHelper(root, word, index) {
		if (index === word.length) {
			if (!root.end) return false;
			root.end = false;
			return Object.values(root.children).length === 0;
		}
		let char = word[index];
		let children = root.children[char];
		if (!children) return false;
		let shoudDelete = this.deleteHelper(children, word, index + 1);
		if (shoudDelete) {
			delete root.children[char];
			return Object.values(root.children).length === 0 && !root.end;
		}
		return false;
	}
}

let trie2 = new Trie2();
trie2.insert("batch");
trie2.insert("bat");
trie2.delete("batch");
console.log("trie2 search ", trie2.search("batch"));
console.log("trie2 prefix ", trie2.start("batc"));

//3.

class Node3 {
	constructor() {
		this.childeNode = {};
		this.end = false;
	}
}

class Trie3 {
	constructor() {
		this.root = new Node3();
	}
	insert(word) {
		let node = this.root;
		for (let char of word) {
			if (!node.childeNode[char]) {
				node.childeNode[char] = new Node3();
			}
			node = node.childeNode[char];
		}
		node.end = true;
	}
	search(word) {
		let node = this.root;
		for (let char of word) {
			if (!node.childeNode[char]) {
				return false;
			}
			node = node.childeNode[char];
		}
		return node.end;
	}
	start(prefix) {
		let node = this.root;
		for (let char of prefix) {
			if (!node.childeNode[char]) {
				return false;
			}
			node = node.childeNode[char];
		}
		return true;
	}
	delete(word) {
		this.deleteHelper(this.root, word, 0);
	}
	deleteHelper(root, word, index) {
		if (index === word.length) {
			if (!root.end) return false;
			root.end = false;
			return Object.values(root.childeNode).length === 0;
		}
		let char = word[index];
		let chaild = root.childeNode[char];
		if (!chaild) return false;
		let shoudDelete = this.deleteHelper(chaild, word, index + 1);
		if (shoudDelete) {
			delete root.childeNode[char];
			return Object.values(root.childeNode).length === 0 && !root.end;
		}
	}
}

let trie3 = new Trie3();
console.log("Trie 3 is ");
trie3.insert("Apple");
trie3.insert("App");
trie3.delete("App");
console.log("search", trie3.search("Apple"));
console.log("prefix", trie3.start("p"));

//4. auto complete

class Node4 {
	constructor() {
		this.childeNode = {};
		this.end = false;
	}
}

class Trie4 {
	constructor() {
		this.root = new Node4();
	}
	insert(words) {
		let node = this.root;
		for (let word of words) {
			if (!node.childeNode[word]) {
				node.childeNode[word] = new Node4();
			}

			node = node.childeNode[word];
		}
		node.end = true;
	}
	find(prefix) {
		let node = this.root;
		for (let char of prefix) {
			if (!node.childeNode[char]) {
				return false;
			}
			node = node.childeNode[char];
		}
		console.log("find node is ", node);

		return node;
	}
	autoComplete(word) {
		let node = this.find(word);
		if (!node) {
			return [];
		}
		let result = [];
		function dfs(currentNode, prefix) {
			if (currentNode.end) {
				result.push(prefix);
			}
			for (let char in currentNode.childeNode) {
				if (currentNode.childeNode[char]) {
					dfs(currentNode.childeNode[char], prefix + char);
				}
			}
		}
		dfs(node, word);
		return result;
	}
	search(word) {
		let node = this.root;
		let result = [];
		for (let char of word) {
			if (!node.childeNode[char]) {
				return false;
			}
			node = node.childeNode[char];
		}
		return node.end;
	}
}

let trie44 = new Trie4();
trie44.insert("app");
trie44.insert("apple");
trie44.insert("application");
trie44.find("app");
console.log(trie44.autoComplete("a"));
console.log("search", trie44.search("ap"));

//5.
class TrieNode5 {
	constructor() {
		this.childeNode = {};
		this.end = false;
	}
}

class Trie5 {
	constructor() {
		this.root = new TrieNode5();
	}
	insert(word) {
		let node = this.root;
		for (let char of word) {
			if (!node.childeNode[char]) {
				node.childeNode[char] = new TrieNode5();
			}
			node = node.childeNode[char];
		}
		node.end = true;
	}
	search(word) {
		let node = this.root;
		for (let char of word) {
			if (!node.childeNode[char]) {
				return false;
			}
			node = node.childeNode[char];
		}
		return node.end;
	}
	start(prefix) {
		let node = this.root;
		for (let char of prefix) {
			if (!node.childeNode[char]) {
				return false;
			}
			node = node.childeNode[char];
		}
		return true;
	}
	delete(word) {
		this.deleteHelper(this.root, word, 0);
	}
	deleteHelper(root, word, index) {
		if (index === word.length) {
			if (!root.end) return false;
			root.end = false;
			return Object.values(root.childeNode).length === 0;
		}
		let char = word[index];
		let chaild = root.childeNode[char];
		if (!chaild) return false;
		let shoudDelete = this.deleteHelper(chaild, word, index + 1);
		if (shoudDelete) {
			delete root.childeNode[char];
			return Object.values(root.childeNode).length === 0 && !root.end;
		}
	}

	complete(word) {
		let node = this.find(word);
		if (!node) {
			return [];
		}
		let result = [];
		function dfs(currentNode, prefix) {
			if (currentNode.end) {
				result.push(prefix);
			}
			for (let chaild in currentNode.childeNode) {
				if (currentNode.childeNode[chaild]) {
					dfs(currentNode.childeNode[chaild], prefix + chaild);
				}
			}
		}
		dfs(node, word);
		return result;
	}
	find(word) {
		let node = this.root;
		for (let char of word) {
			if (!node.childeNode[char]) {
				return false;
			}
			node = node.childeNode[char];
		}
		return node;
	}

	autoComplete(word) {
		let node = this.find(word);
		let result = [];
		if (!node) {
			return [];
		}
		function dfs(currentNode, prefix) {
			if (currentNode.end) {
				result.push(prefix);
			}
			for (let char in currentNode.childeNode) {
				if (currentNode.childeNode[char]) {
					dfs(currentNode.childeNode[char], prefix + char);
				}
			}
		}
		dfs(node, word);
		return result;
	}
}

let trie5 = new Trie5();
console.log("trie 5 is ");
trie5.insert("application");
trie5.insert("apple");
trie5.insert("app");
console.log("search is ", trie5.search("apple"));
console.log("prefix or not ", trie5.start("ap"));
console.log("the find one is ", trie5.complete("appl"));

//6.

class TrieNode6 {
	constructor() {
		this.childeNode = {};
		this.end = false;
	}
}

class Trie6 {
	constructor() {
		this.root = new TrieNode6();
	}
	insert(word) {
		let node = this.root;
		for (let char of word) {
			if (!node.childeNode[char]) {
				node.childeNode[char] = new TrieNode6();
			}
			node = node.childeNode[char];
		}
		node.end = true;
	}
	search(word) {
		let node = this.root;
		for (let char of word) {
			if (!node.childeNode[char]) {
				return false;
			}
			node = node.childeNode[char];
		}
		return node.end;
	}
	prefix(word) {
		let node = this.root;
		for (let char of word) {
			if (!node.childeNode[char]) {
				return false;
			}
			node = node.childeNode[char];
		}
		return true;
	}
	delete(word) {
		this.deleteHelper(this.root, word, 0);
	}
	deleteHelper(root, word, index) {
		if (word.length === index) {
			if (!root.end) return false;
			root.end = false;
			return Object.values(root.childeNode).length === 0;
		}
		let char = word[index];
		let chaild = root.childeNode[char];
		if (!chaild) return false;
		let shoudDelete = this.deleteHelper(chaild, word, index + 1);
		if (shoudDelete) {
			delete root.childeNode[char];
			return Object.values(root.childeNode).length === 0 && !root.end;
		}
	}
	find(word) {
		let node = this.root;
		for (let char of word) {
			if (!node.childeNode[char]) {
				return false;
			}
			node = node.childeNode[char];
		}
		return node;
	}
	autoComplete(word) {
		let node = this.find(word);
		if (!node) {
			return [];
		}
		let result = [];
		function dfs(currentNode, prefix) {
			if (currentNode.end) {
				result.push(prefix);
			}
			for (let char in currentNode.childeNode) {
				if (currentNode.childeNode[char]) {
					dfs(currentNode.childeNode[char], prefix + char);
				}
			}
		}
		dfs(node, word);
		return result;
	}
}

let trie6 = new Trie6();
console.log("The Trie 6 is  ");
trie6.insert("application");
trie6.insert("apple");
trie6.insert("app");
trie6.delete("app");
console.log("The serch value is ", trie6.search("app"));
console.log("The prefix value is ", trie6.prefix("al"));
console.log("The auto complete of ", trie6.autoComplete("a"));
