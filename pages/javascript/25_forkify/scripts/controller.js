"use strict";

import { getRecipes, addFunctions } from "./model.js";
import {
  createUICard,
  clearUI,
  changeBackgroundImgHeight,
  createModal,
} from "./view.js";

const searchBtn = document.querySelector(".searchBtn");
const searchForm = document.querySelector("#search");

searchBtn.addEventListener("click", async function () {
  const searchValue = searchForm.value;
  const recipes = await getRecipes(searchValue);
  changeBackgroundImgHeight();
  clearUI();
  createUICard(recipes);
  addFunctions(createModal());
});
