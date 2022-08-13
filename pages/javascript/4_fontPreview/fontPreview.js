"use strict";

const display = document.querySelector(".display");
const bebas = document.querySelector(".bebas");
const dynaPuff = document.querySelector(".dynaPuff");
const lobster = document.querySelector(".lobster");
const reset = document.querySelector(".reset");

const changeFont = function (element, addFont, remove1, remove2, remove3) {
  element.classList.add(addFont);
  element.classList.remove(remove1);
  element.classList.remove(remove2);
  element.classList.remove(remove3);
};

bebas.addEventListener("click", function () {
  changeFont(display, "bebas", "dynaPuff", "lobster", "barlow");
});
dynaPuff.addEventListener("click", function () {
  changeFont(display, "dynaPuff", "bebas", "lobster", "barlow");
});
lobster.addEventListener("click", function () {
  changeFont(display, "lobster", "dynaPuff", "bebas", "barlow");
});
reset.addEventListener("click", function () {
  changeFont(display, "barlow", "dynaPuff", "lobster", "bebas");
});
