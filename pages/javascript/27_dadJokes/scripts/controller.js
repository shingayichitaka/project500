import { getJoke } from "./model.js";
import { createCard, clearUI } from "./view.js";

("use strict");

const btn = document.querySelector(".getJoke");

btn.addEventListener("click", async function () {
  clearUI();
  const joke = await getJoke();
  createCard(joke);
});
