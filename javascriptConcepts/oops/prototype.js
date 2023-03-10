//porototype in oop in javascript

function BankAccount(customerName, balance = 0) {
  //first letter of constructor function is capital
  this.customerName = customerName;
  //variables are known as properties
  this.accountnumber = Date.now();
  this.balance = balance;
  //functions inside known as methods
  // this.deposit = function (amount) {
  //   this.balance += amount;
  // };
}

const rounitAccount = new BankAccount("Rounit Sinha");
const sinhaAccount = new BankAccount(" Sinha", 1000);

// console.log(rounitAccount);
// console.log(sinhaAccount);

//in console if you check then for both of the objects we have
//different memory allocations but
//while logging in line 18 & 19 , we see that the method deposit is created
//separately for both of the objects
//we can make methods common for all
//and to do this , prototype is required

//let's do this
// BankAccount.prototype.test = " this is a test";
//if we do this then in console test with constructor f  will be logged
// console.log(BankAccount.prototype);
//as we know we use '.' only for objects to access the props
//but BankAccount is a function, so why we are using '.' on it
//because functions in JS are also objects :)

//let us understand from where we get that prototype in line 29

//let us check should we add a function as a property like test in line 29

//we can't use arrow function in line 42, because if we do so then this keyword in line 43 will point to the window and not to the function

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

// console.log(BankAccount.prototype);
//deposit function is logged

rounitAccount.deposit(3000);
console.log(rounitAccount);
//now let's understand the chaining of prototypes
//line 15: new object is created over constructor function i.e., BankAccount here
//now in console we see that there is no deposit method present
//now when in line42 we added deposit method in prototype then in line 49 we use that deposit method and then in line 50 this is logged.
//now in the console, it can be seen easily that there is no deposit function in constructor itself
//but if we expand the prototype section of constructor then we see the deposit function
//so, this deposit method will not be called for every object but only for those where prototype is used
