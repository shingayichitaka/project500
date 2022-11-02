import { generateProducts, determineTopProduct } from "./model.js";
import {
  createCard,
  updateUI,
  clearUI,
  renderLoading,
  createTopProductCard,
} from "./view.js";

("use strict");

const render = async () => {
  try {
    clearUI();
    const products = await generateProducts(20);
    createCard(products);
    const topProduct = determineTopProduct(products);
    createTopProductCard(topProduct);
    const searchBtn = document.querySelector(".search");
    const search = document.querySelector("#searchTerm");
    const all = document.querySelectorAll(".product_card");
    searchBtn.addEventListener("click", async () => {
      const searchTermValue = search.value;
      console.log(searchTermValue);
      clearUI();
      updateUI(products, searchTermValue);
    });
  } catch (err) {
    console.log(err);
  }
};

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => {
  try {
    renderLoading(true);
    render();
  } catch (err) {
    console.log(err);
  }
});

render();
