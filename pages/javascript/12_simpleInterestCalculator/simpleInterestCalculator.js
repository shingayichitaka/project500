"use strict";

const principle = document.querySelector("#principle");
const rate = document.querySelector("#rate");
const time = document.querySelector("#time");
const calculate = document.querySelector(".calculate");
const display = document.querySelector("#display");

const interest = function (element, principle, rate, time) {
  const result = principle * (rate / 100) * time;
  element.textContent = result;
  setTimeout(() => {
    element.textContent = "";
  }, 2500);
};

const validate = function (element) {
  element.value = "Please enter a valid number";
  setTimeout(() => {
    element.value = "";
  }, 2500);
};

calculate.addEventListener("click", function () {
  const principleValue = Number(principle.value);
  const rateValue = Number(rate.value);
  const timeValue = Number(time.value);

  if (isNaN(principleValue) === true) {
    validate(principle);
  } else if (isNaN(rateValue) === true) {
    validate(rate);
  } else if (isNaN(timeValue) === true) {
    validate(time);
  } else {
    interest(display, principleValue, rateValue, timeValue);
  }
});
