"use strict";

const createImg = (largeImg) => {
  const main = document.querySelector("main");
  const img = `
  <img src="${largeImg}">
  `;
  main.insertAdjacentHTML("afterbegin", img);
};

export { createImg };
