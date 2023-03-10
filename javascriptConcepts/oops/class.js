//classes in oop in javaScript

//class introduced in ES6

class BankAccount {
  customerName;
  accountNumber;
  balance = 0;

  //to pass any value we have constructor function in class in js
  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  //adding methods in class in js
  deposit(amount) {
    this.balance += amount;
  }
}

const rounitAccount = new BankAccount("Rounit", 1000);

console.log(rounitAccount);

//now in constructor function file, you've seen that we have added methods in prototype
//how to do the same in class in oop in js refer line 17

rounitAccount.deposit(5000);

console.log(rounitAccount);

//tip: hoisting doesn't works for classes
