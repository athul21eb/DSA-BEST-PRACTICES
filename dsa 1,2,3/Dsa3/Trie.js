class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let curr = this.root;

    for (let char of word) {
      if (!curr.children[char]) {
        curr.children[char] = new TrieNode();
      }
      curr = curr.children[char];
    }

    curr.isEndOfWord = true;
  }

  search(word) {
    let curr = this.root;
    for (let char of word) {
      if (!curr.children[char]) {
        return false;
      }
      curr = curr.children[char];
    }
    return curr.isEndOfWord;
  }
  prefix(word) {
    let curr = this.root;

    for (let char of word) {
      if (!curr.children[char]) {
        return false;
      }
      curr = curr.children[char];
    }
    return true;
  }

  autoComplete(prefix) {
    let curr = this.root;

    for (let char of prefix) {
      if (!curr.children[char]) {
        return [];
      }
      curr = curr.children[char];
    }

    let words = [];

    const dfs = (node, path) => {
      if (node.isEndOfWord) {
        words.push(path);
      }

      for (let char in node.children) {
        dfs(node.children[char], path + char);
      }
    };

    
    dfs(curr, prefix);
    return words;
  }
}

const t = new Trie();
t.insert("applee");
console.log(t.prefix("apple"));
t.insert("applinga");
t.insert("appan annu ante jeevan");
t.insert("appan and amma annu ante jeevan");
t.insert("appan and amma and aniyan annu ante jeevan ");

console.log(t.autoComplete("app"))
