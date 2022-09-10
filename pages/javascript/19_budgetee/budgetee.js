"use strict";

const accountName = document.querySelector(".accountName");
const accountBalance = document.querySelector(".accountBalance");
const expenseAmt = document.querySelector("#expenseAmt");
const addExpenseBtn = document.querySelector(".addExpenseBtn");
const incomeAmt = document.querySelector("#incomeAmt");
const addIncomeBtn = document.querySelector(".addIncomeBtn");

class Account {
  #movementsExp = [];
  #movementsInc = [];
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  get getName() {
    return this.name;
  }
  get getBalance() {
    return this.balance;
  }

  set setExpense(expense) {
    this.#movementsExp.push(expense);
    this.balance -= expense;
  }
  set setIncome(income) {
    this.#movementsInc.push(income);
    this.balance += income;
  }
}

const john = new Account("John Doe", 1000);

const setUI = function (accountName, accountBalance, account) {
  accountName.textContent = account.getName;
  accountBalance.textContent = account.getBalance;
};

setUI(accountName, accountBalance, john);

addExpenseBtn.addEventListener("click", function () {
  const expAmt = Number(expenseAmt.value);
  john.setExpense = expAmt;
  setUI(accountName, accountBalance, john);
  expenseAmt.value = "";
});
addIncomeBtn.addEventListener("click", function () {
  const incAmt = Number(incomeAmt.value);
  john.setIncome = incAmt;
  setUI(accountName, accountBalance, john);
  incomeAmt.value = "";
});
