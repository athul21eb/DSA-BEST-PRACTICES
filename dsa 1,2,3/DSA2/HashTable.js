class HashTable {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.table = new Array(capacity);
  }

  hash(key) {
    if (typeof key !== "string") {
      console.log("key is not a string");
      return null;
    }
    let hash;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % this.capacity;
  }

  set(key, value) {
    let index = this.hash(key);
    if (index === null) {
      console.log("key is not an String ");
      return;
    }
    if (!this.table[index]) {
      this.table[index] = [];
    }

    let exist = this.table[index].find((x) => x.key === key);
    if (exist) {
      exist.value = value;
    } else {
      this.table[index].push({ key, value });
    }
  }

  get(key) {
    let index = this.hash(key);
    if (index === null) {
      console.log("key is not an String ");
      return undefined;
    }
    if (!this.table[index]) {
      console.log("key doest exist");
      return undefined;
    }

    let exist = this.table[index].find((x) => x.key === key);
    if (exist) {
      return exist.value;
    } else {
      console.log("key doest exist ");
      return undefined;
    }
  }

  remove(key) {
    let index = this.hash(key);
    if (index === null) {
      console.log("key is not an String ");
      return undefined;
    }

    if (!this.table[index]) {
      console.log("key is not an String");
      return undefined;
    }

    let indexExist = this.table[index].findIndex((x) => x.key === key);
    if (indexExist === -1) {
      console.log("key doest exist");
      return undefined;
    } else {
      console.log("key found and removed successfully");
      return this.table[index].splice(indexExist, 1)[0].value;
    }
  }
}

const ht = new HashTable(50);

ht.set("name", "Athul");

ht.set("age", "33");
console.log(ht.get("name"));
ht.set("name", "vimal");
console.log(ht.remove("name"));
console.log(ht.get("name"));

class HashTable {
  constructor() {
    this.table = [];
  }

  _hash(key) {
    let hash = 0;
    for (let char of key) {
      hash = (hash + key.charCodeAt(i)) % this.capacity;
    }
  }
}
