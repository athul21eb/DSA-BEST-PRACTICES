//1.hashing collisions happen if same index will replace before value to new value O(1)

class HashTable {
	constructor(size) {
		this.table = new Array(size);
		this.size = size;
	}
	hash(key) {
		let total = 0;
		for (let i = 0; i < key.length; i++) {
			total += key.charCodeAt(i);
		}
		return total % this.size;
	}
	set(key, value) {
		let index = this.hash(key);
		this.table[index] = value;
	}
	get(key) {
		let index = this.hash(key);
		return this.table[index];
	}
	remove(key) {
		let index = this.hash(key);
		this.table[index] = undefined;
	}
	display() {
		for (let i = 0; i < this.table.length; i++) {
			if (this.table[i]) {
				console.log(i, this.table[i]);
			}
		}
	}
}

let hashTable = new HashTable(10);

hashTable.set("name", "sheheer");
hashTable.set("age", 25);
hashTable.display();
console.log(hashTable.get("age"));
hashTable.remove("age");
hashTable.display();

// 2. in collision time this one will work O(n)

class HashTable1 {
	constructor(size) {
		this.item = new Array(size);
		this.size = size;
	}
	hash(key) {
		let total = 0;
		for (let i = 0; i < key.length; i++) {
			total += key.charCodeAt(i);
		}
		return total % this.size;
	}
	set(key, value) {
		let index = this.hash(key);
		let bucket = this.item[index];
		if (!bucket) {
			this.item[index] = [[key, value]];
		} else {
			let sameKeyItem = bucket.find((item) => item[0] === key);
			if (sameKeyItem) {
				sameKeyItem[1] = value;
			} else {
				bucket.push([key, value]);
			}
		}
	}
	get(key) {
		let index = this.hash(key);
		let bucket = this.item[index];
		if (bucket) {
			let sameKeyItem = bucket.find((item) => item[0] === key);
			if (sameKeyItem) {
				return sameKeyItem[1];
			}
		}
		return undefined;
	}
	remove(key) {
		let index = this.hash(key);
		let bucket = this.item[index];
		if (bucket) {
			let sameKeyItem = bucket.find((item) => item[0] === key);
			if (sameKeyItem) {
				bucket.splice(bucket.indexOf(sameKeyItem), 1);
			}
		}
	}
	display() {
		for (let i = 0; i < this.item.length; i++) {
			if (this.item[i]) {
				console.log(i, this.item[i]);
			}
		}
	}
}

let table = new HashTable1(10);
table.set("name", "mohammed");
table.set("age", 24);
table.set("amen", "sheheer");
table.set("naem", "hei");
table.display();
console.log(table.get("naem"));
table.remove("amen");
table.display();

//3.O(n2)

class HashTable3 {
	constructor(size) {
		this.table = new Array(size);
		this.size = size;
	}
	hash(key) {
		let total = 0;
		for (let i = 0; i < key.length; i++) {
			total += key.charCodeAt(i);
		}
		return total % this.size;
	}
	set(key, valaue) {
		let index = this.hash(key);
		let bucket = this.table[index];
		if (!bucket) {
			this.table[index] = [[key, valaue]];
		} else {
			let sameKeyItem = bucket.find((item) => item[0] === key);
			if (sameKeyItem) {
				sameKeyItem[1] = valaue;
			} else {
				bucket.push([key, valaue]);
			}
		}
	}
	get(key) {
		let index = this.hash(key);
		let bucket = this.table[index];
		if (bucket) {
			let sameKeyItem = bucket.find((item) => item[0] === key);
			if (sameKeyItem) {
				return sameKeyItem[1];
			}
		}
		return undefined;
	}
	remove(key) {
		let index = this.hash(key);
		let bucket = this.table[index];
		if (bucket) {
			let sameKeyItem = bucket.find((item) => item[0] === key);
			if (sameKeyItem) {
				bucket.splice(bucket.indexOf(sameKeyItem), 1);
			}
		}
	}
	display() {
		for (let i = 0; i < this.table.length; i++) {
			if (this.table[i]) {
				console.log(i, this.table[i]);
			}
		}
	}
}

let hashTable3 = new HashTable3(10);
console.log("the hashtable3 is");
hashTable3.set("name", "sheheer");
hashTable3.set("naem", "yes");
hashTable3.set("age", 24);
hashTable3.display();
console.log(hashTable3.get("name"));
hashTable3.remove("name");
hashTable3.display();

//4.

class HashTable4 {
	constructor(size) {
		this.table = new Array(size);
		this.size = size;
	}
	hash(key) {
		let total = 0;
		for (let i = 0; i < key.length; i++) {
			total += key.charCodeAt(i);
		}
		return total % this.size;
	}
	set(key, valaue) {
		let index = this.hash(key);
		let bucket = this.table[index];
		if (!bucket) {
			this.table[index] = [[key, valaue]];
		} else {
			let sameKeyItem = bucket.find((item) => item[0] === key);
			if (sameKeyItem) {
				sameKeyItem[1] = valaue;
			} else {
				bucket.push([key, valaue]);
			}
		}
	}
	get(key) {
		let index = this.hash(key);
		let bucket = this.table[index];
		if (bucket) {
			let sameKeyItem = bucket.find((item) => item[0] === key);
			if (sameKeyItem) {
				return sameKeyItem[1];
			}
		}
		return null;
	}
	remove(key) {
		let index = this.hash(key);
		let bucket = this.table[index];
		if (bucket) {
			let sameKeyItem = bucket.find((item) => item[0] === key);
			if (sameKeyItem) {
				bucket.splice(bucket.indexOf(sameKeyItem), 1);
			}
		}
	}
	display() {
		for (let i = 0; i < this.table.length; i++) {
			if (this.table[i]) {
				console.log(i, this.table[i]);
			}
		}
	}
}

let hash4 = new HashTable4(15);
console.log("hashtable4 is ");

hash4.set("name", "mohammed");
hash4.set("naem", "no");
hash4.set("place", "kerala");
hash4.set("happy", "no");
hash4.set("no", "yes");
hash4.set("age", 24);
hash4.display();
console.log(hash4.get("age"));
hash4.remove("name");
hash4.display();

//5.

class HashTable5 {
	constructor(size) {
		this.table = new Array(size);
		this.size = size;
	}
	hash(key) {
		let total = 0;
		for (let i = 0; i < key.length; i++) {
			total += key.charCodeAt(i);
		}
		return total % this.size;
	}
	set(key, valaue) {
		let index = this.hash(key);
		this.table[index] = valaue;
	}
	get(key) {
		let index = this.hash(key);
		return this.table[index];
	}
	remove(key) {
		let index = this.hash(key);
		this.table[index] = null;
	}
	display() {
		for (let i = 0; i < this.table.length; i++) {
			if (this.table[i]) {
				console.log(i, this.table[i]);
			}
		}
	}
}

let hash5 = new HashTable5(40);
console.log("hash table 5 is ");
hash5.set("name", "sheheer");
hash5.set("age", 24);
hash5.display();
console.log(hash5.get("name"));
hash5.remove("age");
hash5.display();

//6.

class HashTable6 {
	constructor(size) {
		this.table = new Array(size);
		this.size = size;
	}
	hash(key) {
		let total = 0;
		for (let i = 0; i < key.length; i++) {
			total += key.charCodeAt(i);
		}
		return total % this.size;
	}
	set(key, valaue) {
		let index = this.hash(key);
		let bucket = this.table[index];
		if (!bucket) {
			this.table[index] = [[key, valaue]];
		} else {
			let sameKeyItem = bucket.find((item) => item[0] === key);
			if (sameKeyItem) {
				sameKeyItem[1] = valaue;
			} else {
				bucket.push([key, valaue]);
			}
		}
	}
	get(key) {
		let index = this.hash(key);
		let bucket = this.table[index];
		if (bucket) {
			let sameKeyItem = bucket.find((item) => item[0] === key);
			if (sameKeyItem) {
				return sameKeyItem[1];
			}
		}
		return null;
	}
	remove(key) {
		let index = this.hash(key);
		let bucket = this.table[index];
		if (bucket) {
			let sameKeyItem = bucket.find((item) => item[0] === key);
			if (sameKeyItem) {
				bucket.splice(bucket.indexOf(sameKeyItem), 1);
			}
		}
	}
	display() {
		for (let i = 0; i < this.table.length; i++) {
			if (this.table[i]) {
				console.log(i, this.table[i]);
			}
		}
	}
}

let hash6 = new HashTable6(30);
console.log("hash table 6 is");
hash6.set("name", "sheheer");
hash6.set("enam", "nam");
hash6.set("age", 20);
hash6.display();
console.log(hash6.get("age"));
hash6.remove("name");
hash6.display();

//7.

class HashTable7 {
	constructor(size) {
		this.table = new Array(size);
		this.size = size;
	}
	hash(key) {
		let total = 0;
		for (let i = 0; i < key.length; i++) {
			total += key.charCodeAt(i);
		}
		return total % this.size;
	}
	set(key, value) {
		let index = this.hash(key);
		let bucket = this.table[index];
		if (!bucket) {
			this.table[index] = [[key, value]];
		} else {
			let sameKeyItem = bucket.find((item) => item[0] === key);
			if (sameKeyItem) {
				sameKeyItem[1] = value;
			} else {
				bucket.push([key, value]);
			}
		}
	}
	get(key) {
		let index = this.hash(key);
		let bucket = this.table[index];
		if (bucket) {
			let sameKeyItem = bucket.find((item) => item[0] === key);
			if (sameKeyItem) {
				return sameKeyItem[1];
			}
		}
		return null;
	}
	remove(key) {
		let index = this.hash(key);
		let bucket = this.table[index];
		if (bucket) {
			let sameKeyItem = bucket.find((item) => item[0] === key);
			if (sameKeyItem) {
				bucket.splice(bucket.indexOf(sameKeyItem), 1);
			}
		}
	}
	display() {
		for (let i = 0; i < this.table.length; i++) {
			if (this.table[i]) {
				console.log(i, this.table[i]);
			}
		}
	}
}

let hash7 = new HashTable7(20);
console.log("hash table 7 is ");
hash7.set("name", "sheheer");
hash7.set("naem", "yes");
hash7.set("age", 24);
hash7.display();
console.log(hash7.get("age"));
hash7.remove("age");
hash7.display();

//8

class HashTable8 {
	constructor(size) {
		this.table = new Array(size);
		this.size = size;
	}
	hash(key) {
		let total = 0;
		for (let i = 0; i < key.length; i++) {
			total += key.charCodeAt(i);
		}
		return total % this.size;
	}
	set(key, valaue) {
		let index = this.hash(key);
		let bucket = this.table[index];
		if (!bucket) {
			this.table[index] = [[key, valaue]];
		} else {
			let sameKeyItem = bucket.find((item) => item[0] === key);
			if (sameKeyItem) {
				sameKeyItem[1] = valaue;
			} else {
				bucket.push([key, valaue]);
			}
		}
	}
	get(key) {
		let index = this.hash(key);
		let bucket = this.table[index];
		if (bucket) {
			let sameKeyItem = bucket.find((item) => item[0] === key);
			if (sameKeyItem) {
				return sameKeyItem[1];
			}
		}
		return null;
	}
	remove(key) {
		let index = this.hash(key);
		let bucket = this.table[index];
		if (bucket) {
			let sameKeyItem = bucket.find((item) => item[0] === key);
			if (sameKeyItem) {
				bucket.splice(bucket.indexOf(sameKeyItem), 1);
			}
		}
	}
	display() {
		for (let i = 0; i < this.table.length; i++) {
			if (this.table[i]) {
				console.log(i, this.table[i]);
			}
		}
	}
}

let hash8 = new HashTable8(50);

console.log("hash table 8 is ");
hash8.set("place", "cheloor");
hash8.set("plaec", "looo");
hash8.set("age", 24);
hash8.set("local", "yes");
hash8.display();
console.log(hash8.get("place"));
hash8.remove("age");
hash8.display();
