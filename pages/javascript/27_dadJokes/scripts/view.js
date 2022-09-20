"use strict";

const createCard = async (joke) => {
  const html = await `
        <div class="joke">
            <p>${joke.setup}</p>
            <p>${joke.punchline}</p>
        </div>
    `;
  const app = document.querySelector(".app");
  app.insertAdjacentHTML("afterbegin", html);
};

const clearUI = () => {
  try {
    const allJokes = document.querySelectorAll(".joke");
    if (allJokes) {
      allJokes.forEach((value) => {
        value.remove();
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export { createCard, clearUI };
