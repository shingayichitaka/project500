"use strict";

const createCard = (obj) => {
  try {
    const { age, name } = obj;
    const html = `
    <div class="card">
                <h3>Your name is ${name} and you are probably ${age}
                years old</h3>
            </div>
    `;
    const board = document.querySelector(".board");
    board.insertAdjacentHTML("afterbegin", html);
  } catch (err) {
    console.log(err);
  }
};

const clearUI = () => {
  try {
    const cards = document.querySelectorAll(".card");
    cards.forEach((value) => {
      value.remove();
    });
  } catch (err) {
    console.log(err);
  }
};

export { createCard, clearUI };
