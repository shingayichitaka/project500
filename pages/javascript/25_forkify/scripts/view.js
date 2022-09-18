"use strict";

const app = document.querySelector(".app");

const createUICard = function (arr) {
  arr.forEach((value) => {
    const html = `
        <div class="recipe">
         <h2>${value.title}</h2>
         <p>${value.publisher}</p>
         <img src="${value.image}" alt="picture of food">
         <button class="recipe-btn" id="${value.id}">Save</button>
        </div>
    `;
    app.insertAdjacentHTML("afterbegin", html);
  });
};

const createUIBookmarkCard = function (arr) {
  arr.forEach((value) => {
    const html = `
        <div class="recipe">
         <h2>${value.title}</h2>
         <p>${value.publisher}</p>
         <img src="${value.image_url}" alt="picture of food">
         <a href="${value.source_url}" target="_blank">Source Link</a>
         <p>Servings: ${value.servings}</p>
         <p>Cooking Time: ${value.cooking_time}</p>
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

export {
  createUICard,
  clearUI,
  changeBackgroundImgHeight,
  createUIBookmarkCard,
};
