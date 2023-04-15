// methods inside sets DS
//has, values, add, remove, union, size
function mySets() {
  let collection = [];

  //has methods checks if element is present or not

  this.has = function (element) {
    return collection.indexOf(element) !== 1;
  };

  //values function return all the values of sets

  this.values = function () {
    return collection;
  };

  //add method will add element to the set

  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    } else {
      return false;
    }
  };
  //remove method will eliminate the element from set
  this.remove = function (element) {
    if (this.has(element)) {
      let index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = function () {
    return collection.length;
  };
}

var setA = new mySet();

setA.add("a");
setA.add("b");
setA.add("c");
setA.add("d");

console.log(setA);
