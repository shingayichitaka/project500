import { getNationality } from "./model.js";
import { createCard, clearUI } from "./view.js";

("use strict");

const btn = document.querySelector(".check");

btn.addEventListener("click", async () => {
  try {
    clearUI();
    const nameInput = document.querySelector("#name");
    const value = nameInput.value;
    const countries = await getNationality(value);
    createCard(countries);
  } catch (err) {
    console.log(err);
  }
});
