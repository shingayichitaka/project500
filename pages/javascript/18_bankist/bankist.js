"use strict";

const createBtn = document.querySelector(".createBtn");
const accountNameFormInput = document.querySelector("#accountName");
const ageFormInput = document.querySelector("#age");
const initialBalanceFormInput = document.querySelector("#initialBalance");
const createAccountElement = document.querySelector(".createAccount");
const appElement = document.querySelector(".app");
const addExpenseBtn = document.querySelector(".addExpense");
const addIncomeBtn = document.querySelector(".addIncome");
const nameElement = document.querySelector(".nameElement");
const balanceElement = document.querySelector(".balanceElement");
const expenseAmt = document.querySelector("#expense");
const incomeAmt = document.querySelector("#income");

class Account {
  constructor(name, age, balance) {
    this.name = name;
    this.age = age;
    this.balance = balance;
  }

  set addIncome(income) {
    this.balance += income;
  }
  set addExpense(expense) {
    this.balance -= expense;
  }

  get getName() {
    return this.name;
  }
  get getAge() {
    return this.age;
  }
  get getBalance() {
    return this.balance;
  }
}

let account;

const openUI = (element) => {
  element.classList.add("openElement");
  element.classList.remove("closeElement");
};
const closeUI = (element) => {
  element.classList.add("closeElement");
  element.classList.remove("openElement");
};

openUI(createAccountElement);
closeUI(appElement);

createBtn.addEventListener("click", function () {
  const accName = accountNameFormInput.value;
  const accAge = ageFormInput.value;
  const balance = initialBalanceFormInput.value;
  account = new Account(accName, accAge, balance);
  console.log(account);
  accountNameFormInput.value = "";
  ageFormInput.value = "";
  initialBalanceFormInput.value = "";
  closeUI(createAccountElement);
  openUI(appElement);
  nameElement.textContent = account.getName;
  balanceElement.textContent = account.getBalance;
});

addExpenseBtn.addEventListener("click", function () {
  const expenseAmtValue = Number(expenseAmt.value);
  account.addIncome = expenseAmtValue;
  expenseAmt.value = "";
  balanceElement.textContent = "";
  balanceElement.textContent = account.getBalance;
});
addIncomeBtn.addEventListener("click", function () {
  const incomeAmtValue = Number(incomeAmt.value);
  account.addIncome = incomeAmtValue;
  incomeAmt.value = "";
  balanceElement.textContent = "";
  balanceElement.textContent = account.getBalance;
});
