"use strict";

const btn = document.querySelector(".generate");
const app = document.querySelector(".app");
const generateJoke = function () {
  fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((data) => {
      const fact = data.fact;
      const html = `
        <p class="child">${fact}</p>
        `;
      app.insertAdjacentHTML("afterbegin", html);
    });
};

const clearUI = () => {
  const child = document.querySelector(".child");
  child.remove();
};
btn.addEventListener("click", function () {
  const child = document.querySelector(".child");
  if (child === null) {
    generateJoke();
  } else {
    clearUI();
    generateJoke();
  }
});
