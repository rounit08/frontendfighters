function Queue() {
  let collection = [];

  this.print = function () {
    return collection;
  };

  this.enqueue = function (element) {
    collection.push(element);
    return collection;
  };

  this.dequeue = function () {
    return collection.shift();
  };

  this.front = function () {
    return collection[0];
  };

  this.size = function () {
    return collection.length;
  };

  this.isEmpty = function () {
    return collection.length === 0;
  };
}
