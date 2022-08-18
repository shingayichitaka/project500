"use strict";

const billAmt = document.querySelector("#billAmt");
const numPeople = document.querySelector("#numPeople");
const percentageTip = document.querySelector("#percentageTip");
const calculate = document.querySelector(".calculate");
const totalAmt = document.querySelector("#totalAmt");
const amtPerPerson = document.querySelector("#amtPerPerson");

const calc = function (bill, numPeople, percentage, element1, element2) {
  const tip = (percentage / 100) * bill;
  const totalBill = tip + bill;
  const amtPerPerson = totalBill / numPeople;
  element1.textContent = `$${totalBill}`;
  element2.textContent = `$${amtPerPerson}`;
};
const clear = function () {
  billAmt.value = "";
  numPeople.value = "";
  percentageTip.value = "";
  totalAmt.textContent = "";
  amtPerPerson.textContent = "";
};

calculate.addEventListener("click", function () {
  const billAmtValue = Number(billAmt.value);
  const numPeopleValue = Number(numPeople.value);
  const percentageTipValue = Number(percentageTip.value);

  if (isNaN(billAmtValue) === true || billAmtValue === 0) {
    billAmt.value = "Please enter a valid number";
    setTimeout(() => {
      billAmt.value = "";
    }, 2000);
  } else if (isNaN(numPeopleValue) === true || numPeopleValue === 0) {
    numPeople.value = "Please enter a valid number";
    setTimeout(() => {
      numPeople.value = "";
    }, 2000);
  } else if (isNaN(percentageTipValue) === true || percentageTipValue === 0) {
    percentageTip.value = "Please enter a valid number";
    setTimeout(() => {
      percentageTip.value = "";
    }, 2000);
  } else {
    calc(
      billAmtValue,
      numPeopleValue,
      percentageTipValue,
      totalAmt,
      amtPerPerson
    );
    setTimeout(() => {
      clear();
    }, 3000);
  }
});
