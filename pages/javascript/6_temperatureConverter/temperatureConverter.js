"use strict";

const degrees = document.querySelector("#degrees");
const calculate = document.querySelector(".calculate");
const farenheight = document.querySelector("#farenheight");

const convert = function (element, degrees) {
  const result = degrees * 1.8 + 32;
  element.textContent = result;
};

calculate.addEventListener("click", function () {
  const fValue = Number(degrees.value);
  if (isNaN(fValue) === true) {
    degrees.value = "Please enter a valid number 😭";
    setTimeout(() => (degrees.value = ""), 2000);
  } else {
    convert(farenheight, fValue);
    setTimeout(() => (farenheight.textContent = ""), 2000);
  }
});
