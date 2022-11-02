"use strict";

const generateCardIncomes = (obj) => {
  const incomes = obj.getIncomes;
  const incomeLogs = document.querySelector(".displays-income-logs");
  incomes.forEach((value) => {
    const html = `
        <div class="log">
            <p>Amount: </p> <p>$${value}</p>
        </div>
    `;
    incomeLogs.insertAdjacentHTML("afterbegin", html);
  });
};

const generateCardExpenses = (obj) => {
  const expenses = obj.getExpenses;
  const expensesLogs = document.querySelector(".displays-expense-logs");
  expenses.forEach((value) => {
    const html = `
        <div class="log">
            <p>Amount: </p> <p>$${value}</p>
        </div>
    `;
    expensesLogs.insertAdjacentHTML("afterbegin", html);
  });
};

const displayBalance = (obj) => {
  const display = document.querySelector(".displays-balance-logs");
  const html = `<p class="balance">
  The current balance is $${obj.getBalance}</p>`;
  display.insertAdjacentHTML("afterbegin", html);
};

export { generateCardIncomes, generateCardExpenses, displayBalance };
