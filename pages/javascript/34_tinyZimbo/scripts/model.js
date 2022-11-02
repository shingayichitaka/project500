"use strict";

const genRandTransactions = () => {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 10 + 1));
  }
  return arr;
};

class Account {
  #incomes = genRandTransactions();
  #expenses = genRandTransactions();
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }
  get getIncomes() {
    return this.#incomes;
  }
  get getExpenses() {
    return this.#expenses;
  }
  set incomes(income) {
    this.#incomes.push(income);
  }
  get getBalance() {
    const income = this.#incomes.reduce((acc, value) => {
      return acc + value;
    }, 0);
    const expense = this.#expenses.reduce((acc, value) => {
      return acc + value;
    }, 0);
    return income - expense;
  }
  set expenses(expense) {
    this.#expenses.push(expense);
  }
}

const john = new Account("John Doe", 23);

console.log(john);
console.log(john.getBalance);

export { john };
