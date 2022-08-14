"use strict";

const btn = document.querySelector(".click");
const body = document.querySelector("body");

const images = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];

const changeBackgroundImage = function (element, arr, pointer) {
  element.style.backgroundImage = `url(img/${arr[pointer]})`;
};

let pointer = 0;

changeBackgroundImage(body, images, pointer);

btn.addEventListener("click", function () {
  pointer++;
  if (pointer >= images.length) {
    pointer = 0;
    changeBackgroundImage(body, images, pointer);
  } else {
    changeBackgroundImage(body, images, pointer);
  }
});
