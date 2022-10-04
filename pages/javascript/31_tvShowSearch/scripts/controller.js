import { getShows } from "./model.js";
import { displayShowResults, clearDisplay, changeHeight } from "./view.js";

("use strict");

const btn = document.querySelector(".search-btn");
btn.addEventListener("click", async () => {
  try {
    changeHeight();
    const searchInput = document.querySelector("#searchInput");
    const showValue = searchInput.value;
    clearDisplay();
    const shows = await getShows(showValue);
    await displayShowResults(shows);
  } catch (err) {
    console.log(err);
  }
});
