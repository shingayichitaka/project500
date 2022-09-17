"use strict";

const getRecipes = async function (recipe) {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${recipe}`
    );
    const resJson = await res.json();
    const data = await resJson.data.recipes;
    const recipes = data.map((value) => {
      return {
        id: value.id,
        image: value.image_url,
        publisher: value.publisher,
        title: value.title,
      };
    });
    console.log(recipes);
    return recipes;
  } catch (err) {
    console.log(err);
  }
};

const getMoreInfo = async (id) => {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const resJson = await res.json();
    const data = await resJson.data.recipe;
    const recipeInfo = data.map((value) => {
      return {
        publisher: value.publisher,
        ingredients: value.ingredients,
        sourceURL: value.source_url,
        imageURL: value.image_url,
        title: value.title,
        cookingTime: value.cooking_time,
        id: value.id,
      };
    });
    console.log(recipeInfo);
    return recipeInfo;
  } catch (err) {
    console.log(err);
  }
};

const addFunctions = async (func) => {
  const btns = document.querySelectorAll(".recipe-btn");
  console.log(btns);
  btns.forEach((value) => {
    value.addEventListener("click", async () => {
      console.log(value);
      func;
    });
  });
};

export { getRecipes, getMoreInfo, addFunctions };
