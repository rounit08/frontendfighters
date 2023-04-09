//most common hashtable in js is Object

const { json } = require("react-router");

let obj = {
  name: "rounit",
  age: 20,
};

//name and age are keys & rounit and 20 are values respectively.

//this object prototype has a inbuilt method hasOwnProperty
//this method checks if property is inherited or not

// console.log(obj.hasOwnProperty("name")); // true saying yes name is it's own property

obj.hasOwnProperty = true;

// console.log(obj.hasOwnProperty("name")); //hasOwnProperty is not a function
//block the method

// so to overcome these JavaScript announced MAP

//MAP is another type of HashTable in JS

const collection = new Map();

//MAP has SET AND GET properties

collection.set("name", "rounit");
collection.set("age", 20);

// console.log(collection.get("age")); //logged  20

// we can also iterate on map

for (let [key, value] of collection) {
  //   console.log(`${key} = ${value + "hola"}`);
}

// these were the two hashtables in js
//let's make own hash table
//refer to /DSAwithJS/DataStructure/Hashtable/ownHashtable.js
