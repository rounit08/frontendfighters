// Create your own hashtable in js

//Step 1: Create a hashtable class with table and size initial properties

//now it can store only 0 to 127 index
//to make index integers from key

//Step 2: Write a  hash function

//Step 3: write methods set(), get() and remove()

class Hashtable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
      //this charCodeAt(i) function gives ASCII code for characters
    }
    return hash % this.table.length;
    // as hashtable can only store 0 to 127 so we are
    // checking using modulo that if it is under 127 or not
  }

  set(key, value) {
    let index = this._hash(key);
    this.table[index] = [key, value];
    this.size++;
  }

  get(key) {
    let index = this._hash(key);
    return this.table[index];
  }

  remove(key) {
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      this.table[index] = undefined;
      this.size--;
      return true;
    } else {
      return false;
    }
  }
}

const newHT = new Hashtable();

newHT.set("name", "rounit");
newHT.set("age", "20");

console.log(newHT.get("name")); //rounit
console.log(newHT.get("age")); //20

newHT.remove("name");

console.log(newHT.get("name")); //undefined
console.log(newHT.get("age")); //20
