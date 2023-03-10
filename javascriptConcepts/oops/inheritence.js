// inheritence - from parent to children
// it aids DRY- don't repeat yourself

function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

// const rounitAccount = new BankAccount("Rounit", 1000);
// console.log(rounitAccount);

//-------------------------------------------------------------------------------------------

//so there are many types of bank accounts like savings account/current account

function CurrentAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
  //specific to current account give some properties
  this.transactionLimit = 500000;
}
//special method for currentAccount only
CurrentAccount.prototype.takeLoan = function (amount) {
  console.log("loan granted for" + amount);
};

CurrentAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

// const rounitAccount = new CurrentAccount("Rounit", 1000);
// console.log(rounitAccount);
//-------------------------------------------------------------------------------------------

//now requirements to create new type of account i.e., savingsaccount
function SavingsAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
  //specific to current account give some properties
  this.transactionLimit = 500000;
}
//special method for currentAccount only
SavingsAccount.prototype.takePersonalLoan = function (amount) {
  console.log("Perosnal loan granted for" + amount);
};

SavingsAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

// const rounitAccount = new SavingsAccount("Rounit", 1000);
// console.log(rounitAccount);

//------------------------------------------------------------------------------------------

//now the problem is solved
//we've created different types of accounts but we can clearly see we have created a hell lot of code
//and repeating always be minimized in programming
//here comes the use of inheritence - DRY

function BankAccountInheritence(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

// const rounitAccount = new BankAccount("Rounit", 1000);
// console.log(rounitAccount);

//-------------------------------------------------------------------------------------------

function CurrentAccountInheritence(customerName, balance = 0) {
  //removed bcause of inheritence=====
  // this.customerName = customerName;
  // this.accountNumber = Date.now();
  // this.balance = balance;
  //removed bcause of inheritence=====
  //specific to current account give some properties
  this.transactionLimit = 500000;

  //to call the parent and all props and methods
  BankAccount.call(this, customerName, balance);
}
//special method for currentAccount only
CurrentAccountInheritence.prototype.takeLoan = function (amount) {
  console.log("loan granted for" + amount);
};
//removed bcause of inheritence=====

// CurrentAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };

// const rounitAccount = new CurrentAccount("Rounit", 1000);
// console.log(rounitAccount);
//removed bcause of inheritence=====
//-------------------------------------------------------------------------------------------

function SavingsAccountInheritence(customerName, balance = 0) {
  //removed bcause of inheritence=====
  // this.customerName = customerName;
  // this.accountNumber = Date.now();
  // this.balance = balance;
  //removed bcause of inheritence=====
  //specific to this account give some properties
  this.transactionLimit = 500000;
  //to call the parent and all props and methods
  BankAccount.call(this, customerName, balance);
}

//takes all the prototype of parent
SavingsAccountInheritence.prototype = Object.create(BankAccount.prototype);

SavingsAccountInheritence.prototype.takePersonalLoan = function (amount) {
  console.log("Perosnal loan granted for" + amount);
};

//removed bcause of inheritence=====

// SavingsAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };
//removed bcause of inheritence=====

const rounitAccount = new SavingsAccountInheritence("rounit", 1000);
console.log(rounitAccount);
//before adding line 116, we don't have access to customerName and balance but
//after adding the call method in line 116 we have access to all props and methods of bankAccount

//use classes for best practice as it's after ES6
// class BankAccount {
//   customerName;
//   accountNumber;
//   balance = 0;

//   constructor(customerName, balance) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
//   }

//   deposit(amount) {
//     this.balance += amount;
//   }
// }

// const rounitAccount = new BankAccount("rounit", 1000);

// console.log(rounitAccount);
