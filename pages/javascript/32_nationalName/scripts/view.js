"use strict";

const createCard = (arr) => {
  try {
    arr.forEach((value) => {
      const html = `
            <div class="card">
                <h3>Country: ${value.country}</h3>
                <p>Probability: ${value.probability}</p>
            </div>
        `;
      const board = document.querySelector(".board");
      board.insertAdjacentHTML("afterbegin", html);
    });
  } catch (err) {
    console.log(err);
  }
};

const clearUI = () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((value) => {
    value.remove();
  });
};

export { createCard, clearUI };
