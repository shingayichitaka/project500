"use strict";

const km = document.querySelector("#km");
const calculate = document.querySelector(".calculate");
const miles = document.querySelector("#miles");

const convert = function (element, km) {
  const result = Math.round(km * 0.621371);
  element.textContent = result;
};

calculate.addEventListener("click", function () {
  const fValue = Number(km.value);
  if (isNaN(fValue) === true) {
    km.value = "Please enter a valid number 😭";
    setTimeout(() => (km.value = ""), 2000);
  } else {
    convert(miles, fValue);
    setTimeout(() => (miles.textContent = ""), 2000);
  }
});
