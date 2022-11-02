import { searchProductsByName } from "./model.js";

("use strict");

const renderLoading = (status) => {
  try {
    const loadingIMG = document.querySelector(".loading");
    const body = document.querySelector("main");
    if (status) {
      loadingIMG.style.display = "flex";
      body.style.height = "100vh";
    } else {
      loadingIMG.style.display = "none";
      body.style.height = "auto";
    }
  } catch (err) {
    console.log(err);
  }
};

const createCard = (arr) => {
  try {
    arr.forEach((product) => {
      const card = `
    <div class="product_card">
        <div class="product_card_img" style="background-image: url(${product.img})">
        <img src=${product.getImg} alt="product" />
        </div>
        <div class="product_card_info">
        <h2>${product.getTitle}</h2>
        <h3 class="description">Description:</h3>
        <p>${product.getDescription}</p>
        <p><span class="description">Price: </span><span>${product.getPrice} EUR</span></p>
        <p><span class="description">Rating:</span><span>${product.getRating}/10</span></p></div>
    </div>

        `;
      const product_list = document.getElementById("product_list");
      product_list.insertAdjacentHTML("afterbegin", card);
    });
    renderLoading(false);
  } catch (err) {
    console.log(err);
  }
};

const createTopProductCard = (product) => {
  try {
    const card = `
    <div class="product_card" id="top_card">
        <div class="product_card_img" style="background-image: url(${product.img})">
        <img src=${product.getImg} alt="product" />
        </div>
        <div class="product_card_info">
        <h2>${product.getTitle}  </h2>
        <p id="top_product"> 🏆 Top Product 🏆</p>
        <h3 class="description">Description:</h3>
        <p>${product.getDescription}</p>
        <p><span class="description">Price: </span><span>${product.getPrice} EUR</span></p>
        <p><span class="description">Rating:</span><span>${product.getRating}/10</span></p></div>
    </div>`;
    const product_list = document.getElementById("product_list");
    product_list.insertAdjacentHTML("afterbegin", card);
  } catch (err) {
    console.log(err);
  }
};

const clearUI = () => {
  try {
    const allCards = document.querySelectorAll(".product_card");
    allCards.forEach((value) => {
      value.remove();
    });
  } catch (err) {
    console.log(err);
  }
};

const updateUI = (arr, string) => {
  try {
    const filteredProducts = searchProductsByName(arr, string);
    createCard(filteredProducts);
  } catch (err) {
    console.log(err);
  }
};

export { createCard, clearUI, updateUI, renderLoading, createTopProductCard };
