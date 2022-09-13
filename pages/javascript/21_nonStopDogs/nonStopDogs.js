"use strict";

const app = document.querySelector(".app");
const display = document.querySelector(".display");

const generateImg = function () {
  const img = document.createElement("img");
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((respones) => respones.json())
    .then((data) => {
      const src = data.message;
      img.src = src;
    })
    .catch((err) => console.log(err));
  app.insertAdjacentElement("afterbegin", img);
};

const refreshUI = function () {
  const img = document.querySelector("img");
  if (img === null) {
    generateImg();
  } else {
    img.remove();
    generateImg();
  }
};

refreshUI();

const imgLoop = setInterval(() => {
  refreshUI();
}, 8000);
