"use strict";

import { getRecipes, addFunctions } from "./model.js";
import {
  createUICard,
  clearUI,
  changeBackgroundImgHeight,
  createUIBookmarkCard,
} from "./view.js";

const searchBtn = document.querySelector(".searchBtn");
const searchForm = document.querySelector("#search");

const bookmarksBtn = document.querySelector(".bookmarksBtn");

const bookmarks = [];

searchBtn.addEventListener("click", async function () {
  const searchValue = searchForm.value;
  const recipes = await getRecipes(searchValue);
  changeBackgroundImgHeight();
  clearUI();
  createUICard(recipes);
  addFunctions(bookmarks);
});

bookmarksBtn.addEventListener("click", async function () {
  changeBackgroundImgHeight();
  clearUI();
  createUIBookmarkCard(bookmarks);
});
