"use strict";

const displayShowResults = async (shows) => {
  try {
    const arr = shows;
    console.log(arr);
    arr.forEach((value) => {
      const html = `
        <div class="card">
            <img src="${value.img}">
            <h2>${value.name}</h2>
            <p><a href="${value.link}" target="_blank">Click here to see more details</a></p>
            <p>${value.summary}</p>
        </div>
        `;
      const main = document.querySelector("main");
      main.insertAdjacentHTML("afterbegin", html);
    });
  } catch (err) {
    console.log(err);
  }
};

const clearDisplay = () => {
  const shows = document.querySelectorAll(".card");
  shows.forEach((value) => {
    value.remove();
  });
};

const changeHeight = () => {
  const body = document.querySelector("body");
  body.style.height = "auto";
};

export { displayShowResults, clearDisplay, changeHeight };
