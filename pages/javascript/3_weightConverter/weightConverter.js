"use strict";

const kgs = document.querySelector("#kgs");
const lbs = document.querySelector("#lbs");
const calculate = document.querySelector(".calculate");

const convert = function (kgsValue, element) {
  const lbsValue = kgsValue * 2.2046;
  element.textContent = lbsValue;
  setTimeout(function () {
    element.textContent = "";
  }, 3000);
};

calculate.addEventListener("click", function () {
  const kgsValue = Number(kgs.value);
  if (isNaN(kgsValue) === true) {
    kgs.value = "Please provide a valid number";
    setTimeout(function () {
      kgs.value = "";
    }, 3000);
  } else if (kgsValue) {
    convert(kgsValue, lbs);
  } else {
    kgs.value = "Please provide a valid number";
    setTimeout(function () {
      kgs.value = "Please provide a valid number";
    }, 3000);
  }
});
