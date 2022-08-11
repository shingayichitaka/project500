"use strict";

const click = document.querySelector(".click");
const body = document.querySelector("body");
let pointer = 0;

const colors = [
  "#F9ED69",
  "#F08A5D",
  "#B83B5E",
  "#6A2C70",
  "#F4EEFF",
  "#521262",
  "#A6B1E1",
  "#F67280",
  "#1FAB89",
  "#FF5722",
  "#DDFFBC",
  "#086972",
  "#B693FE",
  "#52057B",
];
const changeBackgroundColor = function (element, pointer, arr) {
  element.style.backgroundColor = arr[pointer];
};
changeBackgroundColor(body, pointer, colors);

click.addEventListener("click", function () {
  pointer++;
  if (pointer > colors.length - 1) {
    pointer = 0;
    changeBackgroundColor(body, pointer, colors);
  } else {
    changeBackgroundColor(body, pointer, colors);
  }
});
