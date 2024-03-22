// // // // arr.map((elem, index) => {
// // // // //   console.log(`The element ${elem} is at index ${index} of the array`);
// // // // });

// // // //map creates a new array always

// // // //filter method will return only those element from the array which fulfills the given criteria

// // // // const moreThanTwo = arr.filter((num) => {
// // // //   return num > 2;
// // // // });

// // // // console.log(moreThanTwo);

// // // //reduce method reduces all the elements of the array to one single value

// // // let sum = arr.reduce((acc, curr, i, arritself) => {
// // //   return acc + curr;
// // // }, 0);

// // // console.log(sum);
// // // //in reduce the first parameter is a callbackfun and second is the initial value of acc, which stores result from prev calculations

// // // polyfill of map

// // //  arr.map((element, index, arr)=>{})

// // // Array.prototype.customMap = function (callbackfun) {
// // //   let array = [];

// // //   for (let i = 0; i < this.length; i++) {
// // //     array.push(callbackfun(this[i], i, this));
// // //   }

// // //   return array;
// // // };

// // // arr.customMap((el) => {
// // //   console.log(el * 2);
// // // });

// // // filter method polyfills
// // // filter((elem, index, arr)=>{})

// // // Array.prototype.myFilter = function (callbackfun) {
// // //   let array = [];

// // //   for (let i = 0; i < this.length; i++) {
// // //     if (callbackfun(this[i], i, this)) array.push(this[i]);
// // //   }
// // //   return array;
// // // };

// // // const fltered = arr.myFilter((el) => {
// // //   return el > 2;
// // // });

// // // console.log(fltered);

// // //reduce polyfill
// // //reduce((acc, curr, index, array)=> {}, acc)

// // // let arr = [1, 2, 3, 4, 5];

// // // Array.prototype.polyfillReduce = function (callbackfun, initialvalue) {
// // //   var accumulator = initialvalue;

// // //   for (let i = 0; i < this.length; i++) {
// // //     accumulator = accumulator
// // //       ? callbackfun(accumulator, this[i], i, this)
// // //       : this[i];
// // //   }
// // //   return accumulator;
// // // };

// // // let sum = arr.polyfillReduce((acc, curr) => {
// // //   return acc + curr;
// // // }, 0);

// // // console.log(sum);

// // // let students = [
// // //   { name: "Rounit", rollNumber: 11, marks: 20 },
// // //   { name: "Simba", rollNumber: 20, marks: 68 },
// // //   { name: "Jenny", rollNumber: 71, marks: 73 },
// // //   { name: "Rosh", rollNumber: 15, marks: 42 },
// // // ];

// // //q1 return only names of students in capital
// // //SOLUTION
// // // students.map((stdnt) => {
// // //   console.log(stdnt.name.toUpperCase());
// // // });

// // //q2 return only details of those who scored more than 60 marks and roll greater than 15

// // // const nerds = students.filter((student) => {
// // //   return student.marks > 60 && student.rollNumber > 25;
// // // });

// // // console.log(nerds);

// // // q4 sum of marks of all students

// // // let totalMarksObtined = students.reduce((acc, curr) => {
// // //   return acc + curr.marks;
// // // }, 0);

// // // console.log(totalMarksObtined);

// // // function declaration

// // // function helloThisIsMyFunction() {}

// // //function expression

// // // when we store the function in a variable
// // // const square = function (num) { return Math.pow(num, num)}

// // // First class functions
// // // function treated as variables are first class functions

// // function square(num) {
// //   return num * num;
// // }

// // function displaySquare(fn) {
// //   console.log(fn(5));
// // }

// // displaySquare(square(5));

// // what is IIFE? immediately invoked function expression

// // (function square(num) {
// //     console.log(num * num)
// // })()

// //ability of a function to take value of var out of scope is the closures

// function square(num) {
//   return num * num;
// }

// const square = (num) => {
//   return num * num;
// };

// var name = "rounit";
// //global scope
// function local() {
//   //local scope
//   console.log(name);
//   var name2 = "bill";
//   console.log(name2);
// }
// console.log(name);
// // console.log(name2);

// local();

// function myFunction() {
//   let name = " nothing";

//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// var myFunc = myFunction();
// myFunc();

// function createBase(num) {
//   return function (innerNum) {
//     return num + innerNum;
//   };
// }

// var addSix = createBase(6);

// console.log(addSix(21));

// // Module Pattern

// var Module = (function() {
//     function privateMode() {

//     }

//     return {
//         publicMethod: function() {}
//     }
// })()

//currying _ERCH

// currying is a technique in which a function \

// function f(a) {
//   return function (b) {
//     console.log(a, b);
//   };
// }

// f(1)(2);

//implement sum(2)(6)(1)

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(sum(1)(2)(7));

// function evaluate(operation) {
//   return function (a) {
//     return function (b) {
//       if (operation === "sum") return a + b;
//       else if (operation === "divide") return a / b;
//       else if (operation === "multiply") return a * b;
//       else if (operation === "subtract") return a - b;
//       else return "";
//     };
//   };
// }

// console.log(evaluate("divide")(1)(2));

//infinte currying

// function add(a) {
//   return function (b) {
//     if (b) return add(a + b);
//     return a;
//   };
// }

//OBJECTS

// Everyhing in javascript is an Object

// const user = {
//     name :"rounit",
//     age: 20
// }

// const func = (function (a) {
//   delete a;
//   return a;
// })(5);

// console.log(func);
// var name = "rounitsinha";
// var newName = "rohan";
// let user = {
//   name: "rounit",
//   age: 20,
//   getDetails: () => {
//     console.log(this.name, "and", this.newName);
//   },
// };

// user.getDetails();

// class user {
//   constructor(n) {
//     this.name = n;
//   }

//   getName() {
//     console.log(this.name);
//   }
// }

// const user1 = new user("rounit");
// console.log(user1.getName());

// function makeUser() {
//   return {
//     name: "Rounit",
//     ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();

// console.log(user.ref().name);

// const user = {
//   name: "rounit",
//   logMessage() {
//     console.log(this.name);
//   },
// };

// setTimeout(user.logMessage, 1000);
// user.logMessage();

//call apply and bind methods with their polyfills

var obj = { name: " rounit" };

function sayHelloViaCall(age, gender) {
  return (
    "Hello this is " +
    this.name +
    " I am a " +
    gender +
    " and I am " +
    age +
    " years old"
  );
}

// console.log(sayHelloViaCall.call(obj, 20, "male"));

// call method is for everyfunction for which obj we want to pass and work on

function sayHelloViaApply(age, gender) {
  return this.name + " " + age + " " + gender;
}

// console.log(sayHelloViaApply.call(obj, 20, " male", "sinha", "20L"));
// console.log(sayHelloViaApply.apply(obj, [20, "male", "sinha", "20L"]));

function findMaxNumber(arr) {
  return Math.max.apply(null, arr);
}

//bind

const bindFunc = sayHelloViaApply.bind(obj);
// console.log(bindFunc(20, "male"));
// console.log(bindFunc(22, "male"));
// console.log(bindFunc(21, "female"));
// console.log(bindFunc(19, "female"));

const animals = [
  { species: "Lion", name: "Rounit" },
  { species: "Bird", name: "Birdsss" },
];

// function printAnimals(i) {
//   this.print = function () {
//     console.log("#" + i + " " + this.species + " : " + this.name);
//   };
//   this.print();
// }
// for (let i = 1; i < animals.length; i++) {
//   printAnimals.call(animals[i], i);
// }

//append an array to another array

const array = ["a", "b"];
const elements = [0, 1, 2];

array.push.apply(array, elements);
// console.log(array);

//find maximum
const numbers = [5, 6, 2, 20, 7];

function findMaxNumber(array) {
  console.log(Math.max.apply(null, array));
}

// findMaxNumber(numbers);

function f() {
  console.log(this);
}

let user = {
  g: f.bind(null),
};

// user.g();

///call polyfill

// call(object, arguments)

// Function.prototype.myCall = function (context = {}, ...args) {
//   if (typeof this !== "function") {
//     throw new Error(this + " is not a function");
//   }

//   context.fn = this;
//   context.fn(...args);
// };

//promises

//synchronous vs asynchronous

// const sub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = false;
//     if (result) resolve("noice");
//     else reject(new Error("whyyyyyyyythefuckkk"));
//   }, 1000);
// });

// sub
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Say hello to ${username}`);
    }, 0);
  });
}

function askForTea(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Wanna drink tea, Mr. ${username}`);
    }, 0);
  });
}

function askForWork(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`So tell me for why you are here, ${username}`);
    }, 0);
  });
}

// importantAction("rounit")
//   .then((msg) => {
//     console.log(msg);
//     return askForTea("sinha");
//   })
//   .then((res) => {
//     console.log(res);
//     return askForWork("rounit ji");
//   })

//   .then((ques) => console.log(ques));  // this is promise chaining but also lengthy

//Promise combinators
// Promise.all(), Promise.race(), Promise.allSettled(), Promise.any();

// Promise.all takes multiple promises and ask for resolve if anyone is failed, all the Promise.all is failed

// Promise.all([
//   importantAction("rounit"),
//   askForTea("sinha"),
//   askForWork("rounit bhaiya"),
// ]).then((res) => console.log(res));

// Promise.race() is exactly like Promise.all(), but it returns first promise that get fulfilled or rejected

// Promise.allSettled() will return every promise either fulfilled or rejected
//Promise.any is like Promise.race() but it only provide any fulfilled promise

// console.log("start");

// const fn = () => {
//   new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
//   });
// };

// console.log("middle");

// fn().then((res) => {
//   console.log(res);
// });
// console.log("end");

// PromisePollyfill

// function PromisePollyfill(executor) {
//   let onResolve,
//     onReject,
//     isFulfilled = false,
//     iscalled = false,
//     value;

//   function resolve(val) {
//     isFulfilled = true;
//     onResolve(value);
//   }
//   function reject(val) {
//     onReject(value);
//   }
//   this.then = function (callback) {
//     onResolve = callback;
//     return this;
//   };

//   this.catch = function (callback) {
//     onReject = callback;

//     return this;
//   };
//   executor(resolve, reject);
// }

// const example = new PromisePollyfill((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// });

// example
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// polyfill of Promise.all

// Promise.all([pro1, pro2, ...]).then([data1, data2, ...]).catch(error =>...)

// const dummy = (time) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(time);
//     }, time);
//   });
// };

// const taskArray = [dummy(1000), dummy(2000), dummy(3000)];

// const PromisePollyfill = (taskArray) => {
//   const output = []

//   taskArray.forEach((promise, index)=>{
//     promise.then((data)=> {
//       output[index] = data
//       if(index = taskArray.length - 1) resolve(output)
//     })
//   })
// }
// let object = {
//   name: "rounit",
// };

// let users = object;
// users.name = "brucelee";

// console.log(object.name); //this is also saying brucelee
// console.log(users.name); //this is also saying brucelee
// AB ye kyu hua

// when we assign a obj to var data is not copied ref is copied

//shallow copy

// let users1 = Object.assign({}, object);  //first way to make shallow copy
// let users1 = { ...object }; //second way
// users1.name = "shakalala";
// console.log(object); // ======<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>=======
// console.log(users1);//=======<<<<<<<<<>>>>>>>>>=======

// cons of shallow copy

// let data = {                             //    |
//   name: "rounit",                       //     |
//   address: {                             //    x
//     city: "Noida",                      //     x
//     state: "UP",                        //     x
//   },
// };

// let newUSER = { ...data };
// newUSER.name = "sinha";
// newUSER.address.city = "gurgaon";
// newUSER.address.state = "Haryana";

// console.log(data);
// console.log(newUSER);

//deep copy                          copy state

// let data = {
//   //    |
//   name: "rounit", //     |
//   address: {
//     //    |
//     city: "Noida", //     |
//     state: "UP", //     |
//   },
// };

// let userss = JSON.parse(JSON.stringify(data));
// userss.address.city = "gurgaon";
// console.log(data);
// console.log(userss);

//disadvantage of JSON method
// bhai function gayab krdega stringify krne par LOL

// JS me kuch apna tarika nhi hai resolve krne ka but we can use Lodash

// Lodashnpm package for development in react etc
// LodashCDN for vanillaJS
// let user = _.cloneDeep(obj)
