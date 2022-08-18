"use strict";

const display = document.querySelector(".display");
const add = document.querySelector(".add");
const lower = document.querySelector(".lower");

let counter = 0;

add.addEventListener("click", function () {
  counter++;
  display.textContent = counter;
});
lower.addEventListener("click", function () {
  counter--;
  display.textContent = counter;
});
