import { getAge } from "./model.js";
import { createCard, clearUI } from "./view.js";

("use strict");

const btn = document.querySelector(".check");

btn.addEventListener("click", async () => {
  try {
    clearUI();
    const input = document.querySelector("#name");
    const inputValue = input.value;
    const prediction = await getAge(inputValue);
    createCard(prediction);
  } catch (err) {
    console.log(err);
  }
});
