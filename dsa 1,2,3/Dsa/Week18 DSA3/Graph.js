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
		this.adjacencyList[vertex1].add(vertex2);
		this.adjacencyList[vertex2].add(vertex1);
	}
	hasEdge(vertex1, vertex2) {
		return (
			this.adjacencyList[vertex1].has(vertex2) &&
			this.adjacencyList[vertex2].has(vertex1)
		);
	}
	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1].delete(vertex2);
		this.adjacencyList[vertex2].delete(vertex1);
	}
	removeVertex(vertex) {
		if (!this.adjacencyList[vertex]) return;
		for (let adjVertex of this.adjacencyList[vertex]) {
			this.removeEdge(vertex, adjVertex);
		}
		delete this.adjacencyList[vertex];
	}
	display() {
		for (let vertex in this.adjacencyList) {
			console.log(`${vertex} ->  ${[...this.adjacencyList[vertex]]}`);
		}
	}
	search(vertex) {
		return !!this.adjacencyList[vertex];
	}
	dfs(start, visited = new Set()) {
		if (!this.adjacencyList[start]) return;
		console.log(start);
		visited.add(start);
		for (let neighbor of this.adjacencyList[start]) {
			if (!visited.has(neighbor)) {
				this.dfs(neighbor, visited);
			}
		}
	}
	bfs(start) {
		if (!this.adjacencyList[start]) return;
		let visited = new Set();
		let queue = [start];
		visited.add(start);
		while (queue.length > 0) {
			let vertex = queue.shift();
			console.log(vertex);
			for (let neighbor of this.adjacencyList[vertex]) {
				if (!visited.has(neighbor)) {
					visited.add(neighbor);
					queue.push(neighbor);
				}
			}
		}
	}
}

let graph = new Graph();
console.log("\nDFS traversal from A:");
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdges("A", "B");
graph.addEdges("A", "C");
graph.addEdges("B", "D");
graph.addEdges("C", "D");
graph.display();
console.log(graph.hasEdge("A", "B"));
console.log(graph.hasEdge("A", "C"));
// graph.removeEdge("A", "B");
// graph.display();
// console.log("next");
// graph.removeVertex("B");
// graph.display();
console.log("its been ", graph.search("B"));
console.log("\nDFS traversal from A:");
graph.dfs("A");
console.log("\nBFS traversal from A:");
graph.bfs("A");

// . 2

class Graph1 {
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
		this.adjacencyList[vertex1].add(vertex2);
		this.adjacencyList[vertex2].add(vertex1);
	}
	display() {
		for (let vertex in this.adjacencyList) {
			console.log(`${vertex} -> ${[...this.adjacencyList[vertex]]}`);
		}
	}
	hasEdge(vertex1, vertex2) {
		return (
			this.adjacencyList[vertex1].has(vertex2) &&
			this.adjacencyList[vertex2].has(vertex1)
		);
	}
	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1].delete(vertex2);
		this.adjacencyList[vertex2].delete(vertex1);
	}
	removeVertex(vertex) {
		if (!this.adjacencyList[vertex]) return;
		for (let neighbor of this.adjacencyList[vertex]) {
			this.removeEdge(vertex, neighbor);
		}
		delete this.adjacencyList[vertex];
	}
	search(vertex) {
		return !!this.adjacencyList[vertex];
	}
	dfs(start, visited = new Set()) {
		if (!this.adjacencyList[start]) return;
		console.log(start);
		visited.add(start);
		for (let neighbor of this.adjacencyList[start]) {
			if (!visited.has(neighbor)) {
				this.dfs(neighbor, visited);
			}
		}
	}
	bfs(start) {
		if (!this.adjacencyList[start]) return;
		let visited = new Set();
		let queue = [start];
		visited.add(start);
		while (queue.length > 0) {
			let vertex = queue.shift();
			console.log(vertex);
			for (let neighbor of this.adjacencyList[vertex]) {
				if (!visited.has(neighbor)) {
					visited.add(neighbor);
					queue.push(neighbor);
				}
			}
		}
	}
}

let graph1 = new Graph1();
graph1.addVertex("A");
graph1.addVertex("B");
graph1.addVertex("C");
graph1.addVertex("D");
graph1.addEdges("A", "B");
graph1.addEdges("B", "C");
graph1.addEdges("B", "D");
graph1.addEdges("D", "C");
graph1.display();
console.log("Its have edge", graph1.hasEdge("A", "B"));
console.log("Its have edge", graph1.hasEdge("A", "D"));
// graph1.removeEdge("A", "B");
// graph1.display();
// console.log("after vertex delete");
// graph1.removeVertex("A");
// graph1.display();
console.log("Its in the graph", graph1.search("B"));
console.log("The traverse dfs");
graph1.dfs("A");
console.log("The traverse bfs");
graph1.bfs("B");

//3.

class Graph3 {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = new Set();
		}
	}
	addEdges(vertex1, vertex2) {
		if (this.adjacencyList[vertex1]) {
			this.addVertex(vertex1);
		}
		if (this.adjacencyList[vertex2]) {
			this.addVertex(vertex2);
		}
		this.adjacencyList[vertex1].add(vertex2);
		this.adjacencyList[vertex2].add(vertex1);
	}
	display() {
		for (let vertex in this.adjacencyList)
			console.log(`${vertex} -> ${[...this.adjacencyList[vertex]]}`);
	}
	hasEdge(vertex1, vertex2) {
		return (
			this.adjacencyList[vertex1].has(vertex2) &&
			this.adjacencyList[vertex2].has(vertex1)
		);
	}
	search(vertex) {
		return !!this.adjacencyList[vertex];
	}
	dfs(start, visited = new Set()) {
		if (!this.adjacencyList[start]) return;
		visited.add(start);
		console.log(start);
		for (let neighbor of this.adjacencyList[start]) {
			if (!visited.has(neighbor)) {
				this.dfs(neighbor, visited);
			}
		}
	}
	bfs(start) {
		if (!this.adjacencyList[start]) return;
		let visited = new Set();
		let queue = [start];
		visited.add(start);
		while (queue.length > 0) {
			let vertex = queue.shift();
			console.log(vertex);
			for (let neighbor of this.adjacencyList[vertex]) {
				if (!visited.has(neighbor)) {
					visited.add(neighbor);
					queue.push(neighbor);
				}
			}
		}
	}
}

let graph3 = new Graph3();
graph3.addVertex("A");
graph3.addVertex("B");
graph3.addVertex("C");
graph3.addVertex("D");
graph3.addEdges("A", "C");
graph3.addEdges("A", "C");
graph3.addEdges("C", "B");
graph3.addEdges("D", "B");
graph3.addEdges("A", "D");
graph3.display();
console.log("Has edge graph 3", graph3.hasEdge("D", "E"));
console.log("its been graph 3", graph3.search("E"));
console.log("The dfs is");
graph3.dfs("A");
console.log("The bfs is");
graph3.bfs("A");

//3.

class Graph4 {
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
		this.adjacencyList[vertex1].add(vertex2);
		this.adjacencyList[vertex2].add(vertex1);
	}
	search(vertex) {
		return !!this.adjacencyList[vertex];
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
		this.adjacencyList[vertex1].delete(vertex2);
		this.adjacencyList[vertex2].delete(vertex1);
	}
	removeVertex(vertex) {
		if (!this.adjacencyList[vertex]) return;
		for (let chaild of this.adjacencyList[vertex]) {
			this.removeEdge(vertex, chaild);
		}
		delete this.adjacencyList[vertex];
	}
	display() {
		for (let vertex in this.adjacencyList) {
			console.log(`${vertex} -> ${[...this.adjacencyList[vertex]]}`);
		}
	}
	dfs(start, visited = new Set()) {
		if (!this.adjacencyList[start]) return;
		console.log(start);
		visited.add(start);
		for (let neighbor of this.adjacencyList[start]) {
			if (!visited.has(neighbor)) {
				this.dfs(neighbor, visited);
			}
		}
	}
	bfs(start) {
		if (!this.adjacencyList[start]) return;
		let visited = new Set();
		let queue = [start];
		visited.add(start);
		while (queue.length) {
			let vertex = queue.shift();
			console.log(vertex);
			for (let neighbor of this.adjacencyList[vertex]) {
				if (!visited.has(neighbor)) {
					visited.add(neighbor);
					queue.push(neighbor);
				}
			}
		}
	}
}

let graph4 = new Graph4();
graph4.addVertex("A");
graph4.addVertex("B");
graph4.addVertex("C");
graph4.addVertex("D");
graph4.addEdges("A", "B");
graph4.addEdges("A", "D");
graph4.addEdges("A", "D");
graph4.addEdges("C", "B");
graph4.addEdges("D", "B");
console.log("Graph 4 is ");
graph4.display();
// graph4.removeEdge("A", "B");
// graph4.removeVertex("A");
// console.log("After delete");
// graph4.display();
console.log("Graph 4 have ", graph4.search("E"));
console.log("Graph 4 have edge ", graph4.hasEdge("C", "B"));
console.log("Dfs is ");
graph4.dfs("A");
console.log("Bfs is ");
graph4.bfs("A");

//. 5

class Graph5 {
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
		this.adjacencyList[vertex1].add(vertex2);
		this.adjacencyList[vertex2].add(vertex1);
	}
	search(vertex) {
		return !!this.adjacencyList[vertex];
	}
	display() {
		for (let value in this.adjacencyList) {
			console.log(`${value} -> ${[...this.adjacencyList[value]]}`);
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
		if (!this.adjacencyList[vertex]) return;
		for (let chaild of this.adjacencyList[vertex]) {
			this.removeEdge(vertex, chaild);
		}
		delete this.adjacencyList[vertex];
	}
	dfs(start, visited = new Set()) {
		if (!this.adjacencyList[start]) return;
		console.log(start);
		visited.add(start);
		for (let chaild of this.adjacencyList[start]) {
			if (!visited.has(chaild)) {
				this.dfs(chaild, visited);
			}
		}
	}
	bfs(start) {
		if (!this.adjacencyList[start]) return;
		let visited = new Set();
		let queue = [start];
		visited.add(start);
		while (queue.length) {
			let vertex = queue.shift();
			console.log(vertex);
			for (let chaild of this.adjacencyList[vertex]) {
				if (!visited.has(chaild)) {
					visited.add(chaild);
					queue.push(chaild);
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
		return null;
	}
}

let graph5 = new Graph5();
console.log("The graph 5 is ");
graph5.addVertex("A");
graph5.addVertex("B");
graph5.addVertex("C");
graph5.addVertex("D");
graph5.addVertex("E");
graph5.addEdges("A", "E");
graph5.addEdges("C", "D");
graph5.addEdges("E", "C");
graph5.addEdges("C", "A");
graph5.addEdges("A", "B");
graph5.display();
console.log("Search ", graph5.search("A"));
console.log("Has edge", graph5.hasEdge("A", "D"));
graph5.display();
console.log("dfs is ");
graph5.dfs("A");
console.log("bfs is");
graph5.bfs("A");
console.log("The shortest ", graph5.shortestPath("A", "D"));

//6

class Graph6 {
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
		this.adjacencyList[vertex1].add(vertex2);
		this.adjacencyList[vertex2].add(vertex1);
	}
	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1].delete(vertex2) &&
			this.adjacencyList[vertex2].delete(vertex1);
	}

	removeVertex(vertex) {
		for (let delevertex of this.adjacencyList[vertex]) {
			this.removeEdge(vertex, delevertex);
		}
		delete this.adjacencyList[vertex];
	}
	hasEdge(vertex1, vertex2) {
		return (
			this.adjacencyList[vertex1] &&
			this.adjacencyList[vertex2] &&
			this.adjacencyList[vertex1].has(vertex2) &&
			this.adjacencyList[vertex2].has(vertex1)
		);
	}
	dfs(start, visited = new Set()) {
		if (!this.adjacencyList[start]) return;
		console.log(start);
		visited.add(start);
		for (let chaild of this.adjacencyList[start]) {
			if (!visited.has(chaild)) {
				this.dfs(chaild, visited);
			}
		}
	}
	bfs(start) {
		if (!this.adjacencyList[start]) return;
		let visited = new Set();
		let queue = [start];
		visited.add(start);
		while (queue.length) {
			let vertex = queue.shift();
			console.log(vertex);
			for (let chaild of this.adjacencyList[vertex]) {
				if (!visited.has(chaild)) {
					visited.add(chaild);
					queue.push(chaild);
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
			for (let chaild of this.adjacencyList[vertex]) {
				if (!visited.has(chaild)) {
					visited.add(chaild);
					queue.push([...path, chaild]);
				}
			}
		}
	}
	display() {
		for (let vertex in this.adjacencyList) {
			console.log(`${vertex} -> ${[...this.adjacencyList[vertex]]}`);
		}
	}
}

let graph6 = new Graph6();
console.log("The graph 6 is ");
graph6.addVertex(10);
graph6.addVertex(20);
graph6.addVertex(30);
graph6.addVertex(40);
graph6.addVertex(50);
graph6.addEdges(10, 20);
graph6.addEdges(10, 50);
graph6.addEdges(20, 40);
graph6.addEdges(40, 20);
graph6.addEdges(30, 50);
// graph6.removeEdge(50, 30);
// graph6.removeVertex(10);
graph6.display();
console.log("Has edge or not ", graph6.hasEdge(30, 40));
console.log("dfs is ");
graph6.dfs(20);
console.log("bfs is ");
graph6.bfs(10);
console.log("SHortest path", graph6.shortestPath(10, 40));

// 7

class Graph7 {
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
		for (let chaild of this.adjacencyList[vertex]) {
			this.removeEdge(vertex, chaild);
		}
		delete this.adjacencyList[vertex];
	}
	dfs(start, visited = new Set()) {
		if (!this.adjacencyList[start]) return;
		console.log(start);
		visited.add(start);
		for (let chaild of this.adjacencyList[start]) {
			if (!visited.has(chaild)) {
				this.dfs(chaild, visited);
			}
		}
	}
	bfs(start) {
		if (!this.adjacencyList[start]) return;
		let visited = new Set();
		let queue = [start];
		visited.add(start);
		while (queue.length) {
			let vertex = queue.shift();
			console.log(vertex);
			for (let chaild of this.adjacencyList[vertex]) {
				if (!visited.has(chaild)) {
					visited.add(chaild);
					queue.push(chaild);
				}
			}
		}
	}
	shortestPath(start, target) {
		if (!this.adjacencyList[start] || !this.adjacencyList[target]) {
			return false;
		}
		let queue = [[start]];
		let visited = new Set([start]);
		while (queue.length) {
			let path = queue.shift();
			let vertex = path[path.length - 1];
			if (vertex === target) {
				return path;
			}
			for (let chaild of this.adjacencyList[vertex]) {
				if (!visited.has(chaild)) {
					visited.add(chaild);
					queue.push([...path, chaild]);
				}
			}
		}
	}
	display() {
		for (let vertex in this.adjacencyList) {
			console.log(`${vertex} -> ${[...this.adjacencyList[vertex]]}`);
		}
	}
}

let graph7 = new Graph7();
console.log("Graph 7 is ");
graph7.addVertex(10);
graph7.addVertex(20);
graph7.addVertex(30);
graph7.addVertex(40);
graph7.addVertex(50);
graph7.addVertex(60);
graph7.addEdges(10, 50);
graph7.addEdges(20, 30);
graph7.addEdges(20, 40);
graph7.addEdges(30, 50);
graph7.addEdges(60, 10);
graph7.addEdges(40, 10);
// graph7.display();
console.log("Has edge", graph7.hasEdge(10, 50));
// graph7.removeVertex(10);
// graph7.removeEdge(20, 40);
graph7.display();
console.log("Dfs is");
graph7.dfs(10);
console.log("Bfs is");
graph7.bfs(10);
console.log("The shortest path is ", graph7.shortestPath(10, 30));
