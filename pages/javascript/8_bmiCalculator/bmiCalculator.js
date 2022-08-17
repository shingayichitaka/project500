"use strict";

const kg = document.querySelector("#kg");
const m = document.querySelector("#m");
const calculate = document.querySelector(".calculate");
const display = document.querySelector("#display");

const calc = function (element, weight, height) {
  const bmi = Math.round(weight / (height * height));
  element.textContent = bmi;
  setTimeout(() => {
    element.textContent = "";
  }, 3000);
};

calculate.addEventListener("click", function () {
  const kgsValue = Number(kg.value);
  const msValue = Number(m.value);
  if (isNaN(kgsValue) === true) {
    kg.value = "Please enter a valid number 😢";
    setTimeout(() => {
      kg.value = "";
    }, 2000);
  } else if (isNaN(msValue) === true) {
    m.value = "Please enter a valid number 😢";
    setTimeout(() => {
      m.value = "";
    }, 2000);
  } else {
    calc(display, kgsValue, msValue);
    setTimeout(() => {
      kg.value = "";
      m.value = "";
    }, 3000);
  }
});
