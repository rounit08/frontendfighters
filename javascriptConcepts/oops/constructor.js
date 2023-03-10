// oop is one of the paradigm of programming

//constructor functions

function BankAccount(customerName, balance = 0) {
  //first letter of constructor function is capital
  this.customerName = customerName;
  //variables are known as properties
  this.accountnumber = Date.now();
  this.balance = balance;
  //functions inside known as methods
  this.deposit = function (amount) {
    this.balance += amount;
  };
}

// const rounitAccount = new BankAccount("Rounit Sinha", 1000);
// this new keyword makes objects out of the constructor function
//before deposit balance 1000
// console.log(rounitAccount);

// rounitAccount.deposit(5000);
//after deposit balance 6000
// console.log(rounitAccount);

//for every new object a complete new object will created and
//separate memory is allocated

//to change balance we can do something like this
// rounitAccount.balance = 2000;
//but this is not a best practice
//we don't want someone to access the object's property outside object
//so we use `ENCAPSULATION`(in details further) to make props private

const accounts = [];
const form = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");

const depositForm = document.querySelector("#depositForm");
const accountNumber = document.querySelector("#accountNumber");
const amount = document.querySelector("#amount");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = new BankAccount(customerName.value, +balance.value);
  accounts.push(account);
  console.log(accounts);
});

depositForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = accounts.find(
    (account) => account.accountnumber === +accountNumber.value
  );
  // console.log(account);
  account.deposit(+amount.value);
  console.log(accounts);
});
