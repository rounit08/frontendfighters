//encapsulation in oop in javascript
//making things private ;)

class BankAccount {
  customerName;
  accountNumber;
  balance = 0;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }
}

class CurrentAccount extends BankAccount {
  transactionLimit = 50000;

  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }

  takeBusinessLoan(amount) {
    console.log("Loan granted of" + amount);
  }
}

// const rounitAccount = new CurrentAccount("rounit", 2000);
// console.log(rounitAccount); //=>balance showing 2000
//everything is working fine but but but
//the catch is the problem is we can manipulate the values like this

// rounitAccount.balance = 10000; //balance changed to 2000
// console.log(rounitAccount); //balance showing 10000
//ye kyaaa hai, ye toh gadbad hai

//to get rid of this we have to use encapsulation
//idea behind encapsulation is hidden in it's name only,
//it will encapsulate some props and methods which can't be edited once created, easily
//getters and setters will be used in order to edit and update

class BankAccountEncapsulated {
  customerName;
  accountNumber;
  #balance = 0; //adding hash "#" means it's private now

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  //to update or set a private prop
  set balance(amount) {
    //setters
    this.#balance = amount;
  }

  //to get
  get balance() {
    //getters
    return this.#balance;
  }
}

class CurrentAccountEncapsulated extends BankAccountEncapsulated {
  transactionLimit = 50000;

  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }

  takeBusinessLoan(amount) {
    console.log("Loan granted of" + amount);
  }
}

const rounitAccount = new CurrentAccountEncapsulated("rounit", 2000);
// console.log(rounitAccount);
// rounitAccount.#balance = 120000; //will give error
// console.log(rounitAccount); //balance not updated and problem solved

//as #balance is private but now banker wants to set balance
//then setters can be used
//refer line 61

rounitAccount.balance = 40000; //updated balance
console.log(rounitAccount); // no error with updated balance shown

//getters refer line 67
//get balance

console.log(rounitAccount.balance);
