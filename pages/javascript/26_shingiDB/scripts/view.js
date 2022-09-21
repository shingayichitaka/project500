import { getCourses, getGames, getBooks } from "./model.js";
import { courses } from "../content/courses.js";
import { books } from "../content/books.js";
import { games } from "../content/games.js";

("use strict");

const createCardCourse = () => {
  const arr = getCourses(courses);
  arr.forEach((value) => {
    const html = `
        <div class="card">
        <h2>Title: ${value.title}</h2>
        <h2>Instructor: ${value.instructor}</h2>
        <h2>Skill: ${value.skill}</h2>
        <h2>Rating: ${value.rating}</h2>
        <h2>Comment: ${value.comment}</h2>
        </div>
    `;
    const app = document.querySelector(".app");
    app.insertAdjacentHTML("afterbegin", html);
  });
};

const createCardBook = () => {
  const arr = getBooks(books);
  arr.forEach((value) => {
    const html = `
        <div class="card">
        <h2>Title: ${value.title}</h2>
        <h2>Author: ${value.author}</h2>
        <h2>Genre: ${value.genre}</h2>
        <h2>Year: ${value.year}</h2>
        <h2>Rating: ${value.rating}</h2>
        <h2>Comment: ${value.comment}</h2>
        </div>
    `;
    const app = document.querySelector(".app");
    app.insertAdjacentHTML("afterbegin", html);
  });
};

const createCardGame = () => {
  const arr = getGames(games);
  arr.forEach((value) => {
    const html = `
        <div class="card">
        <h2>Title: ${value.title}</h2>
        <h2>Genre: ${value.genre}</h2>
        <h2>Developer: ${value.developer}</h2>
        <h2>Publisher: ${value.publisher}</h2>
        <h2>Year: ${value.year}</h2>
        <h2>Rating: ${value.rating}</h2>
        <h2>Comment: ${value.comment}</h2>
        </div>
    `;
    const app = document.querySelector(".app");
    app.insertAdjacentHTML("afterbegin", html);
  });
};

const changeBodyHeight = () => {
  const body = document.querySelector("body");
  body.style.height = "auto";
};

const clearUI = () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((value) => {
    value.remove();
  });
};

export {
  createCardCourse,
  createCardBook,
  createCardGame,
  changeBodyHeight,
  clearUI,
};
