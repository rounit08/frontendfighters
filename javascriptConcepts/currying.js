//currying in javascript

// currying is a function that takes one argument at a time and
// returns a new other function which takes other argument
//f(a,b) => f(a)(b)

function f(a) {
  return function (b) {
    console.log(a, b);
  };
}

console.log(f(5)); // this prints whole function b

console.log(f(5)(6)); // returns 5,6 i.e., the expected output

//why do we use currying
//to create higher order function
//reduce using same var again and again

// ques 2 - implement sum(2)(6)(1) using currying

//normal function should be like this
// function sum2(a, b, c) {
//   return a + b + c;
// }

// console.log(sum2(2, 6, 1));

// using currying

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(2)(6)(1));

//Ques 2 -
// evaluate("sum")(4)(2) => 6
// evaluate("multiply")(4)(2) => 8
// evaluate("divide")(4)(2) => 2
// evaluate("substract")(4)(2) => 2

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return a / b;
      else if (operation === "substract") return a - b;
      else return "invalid operation provided";
    };
  };
}

console.log(evaluate("divide")(4)(2));

//infinite currying
// ques 3- implement add(5)(3)...(n) //sum of all

function addition(a) {
  return function (b) {
    if (b) return addition(a + b);
    return a;
  };
}
console.log(addition(5)(2)()); //logged 7

console.log(addition(5)(2)(8)()); //logged 15

// ques 4- currying vs partial application

//idea behind currying is that the no of functions we are returning is dependent on arguments
//like if we are sending 3 args then we have to return 3 functions
//but in partial application it's not same
//return functions will be less than arguments passing
//refer to ques 2 where we are returning  3 functions for 3 arguments

//with partial application we can do the same sum function like

function sumPartialApplication(a) {
  return function (b, c) {
    return a + b + c;
  };
}

console.log(sumPartialApplication(20)(1, 4)); //log 25

//here we can see that we are returning 2 functions for 3 args
