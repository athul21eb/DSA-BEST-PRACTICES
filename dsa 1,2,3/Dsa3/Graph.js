class Graph {
  constructor() {
    this.adjacentList = {};
  }

  addVertex(vertex) {
    if (!this.adjacentList[vertex]) {
      this.adjacentList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacentList[vertex1]) {
      this.adjacentList[vertex1] = new Set();
    }

    if (!this.adjacentList[vertex2]) {
      this.adjacentList[vertex2] = new Set();
    }

    this.adjacentList[vertex1].add(vertex2);
    this.adjacentList[vertex2].add(vertex1);
  }

  hasEdge(v1, v2) {
    return this.adjacentList[v1].has(v2) && this.adjacentList[v2].has(v1);
  }

  RemoveEdge(v1, v2) {
    this.adjacentList[v1].delete(v2);
    this.adjacentList[v2].delete(v1);
  }

  RemoveVertex(v) {
    if (!this.adjacentList[v]) {
      return;
    }

    for (let adjacentV in this.adjacentList) {
      if (this.adjacentList[v].has(adjacentV)) {
        this.RemoveEdge(v, adjacentV);
      }
    }
    delete this.adjacentList[v];
  }

  print() {
    for (let key in this.adjacentList) {
      console.log(key + "=>" + [...this.adjacentList[key]]);
    }
  }
}

const g = new Graph();
g.addEdge("A", "B");
g.addEdge("B", "C");
g.addEdge("D","C");
g.addEdge("1","A");
g.print();
console.log(g.hasEdge("A", "C"));
g.RemoveEdge("A", "B");
g.RemoveVertex("1");
g.print();


function dfs(graph, startNode) {
  const visited = new Set();
  const result = [];

  function traverse(node) {
    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);

      // Visit neighbors
      for (const neighbor of graph[node]) {
        traverse(neighbor);
      }
    }
  }

  traverse(startNode);
  return result;
}

// Example usage
console.log(dfs(graph, "A")); // Output: ['A', 'B', 'D', 'E', 'F', 'C']


function bfs(graph, startNode) {
  const visited = new Set();
  const queue = [startNode];
  const result = [];

  while (queue.length > 0) {
    const node = queue.shift();

    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);

      // Add neighbors to the queue
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }

  return result;
}

// Example usage
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};
console.log(bfs(graph, "A")); // Output: ['A', 'B', 'C', 'D', 'E', 'F']
