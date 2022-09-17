"use strict";

const app = document.querySelector(".app");

const createUICard = function (arr) {
  arr.forEach((value) => {
    const html = `
        <div class="recipe">
         <h2>${value.title}</h2>
         <p>${value.publisher}</p>
         <img src="${value.image}" alt="picture of food">
         <button class="recipe-btn" id="${value.id}">View</button>
        </div>
    `;
    app.insertAdjacentHTML("afterbegin", html);
  });
};

const clearUI = function () {
  const cards = document.querySelectorAll(".recipe");
  if (cards) cards.forEach((value) => value.remove());
  else return;
};

const changeBackgroundImgHeight = () => {
  const body = document.querySelector("body");
  body.style.height = "auto";
};

const createModal = () => {};

export { createUICard, clearUI, changeBackgroundImgHeight, createModal };
