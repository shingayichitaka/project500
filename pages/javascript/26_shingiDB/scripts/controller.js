import {
  createCardCourse,
  createCardBook,
  createCardGame,
  changeBodyHeight,
  clearUI,
} from "./view.js";
import { getCourses, getGames, getBooks } from "./model.js";
import { courses } from "../content/courses.js";
import { books } from "../content/books.js";
import { games } from "../content/games.js";

("use strict");

const btnCourse = document.querySelector(".content-courses");
const btnBook = document.querySelector(".content-books");
const btnGame = document.querySelector(".content-games");

btnCourse.addEventListener("click", () => {
  clearUI();
  changeBodyHeight();
  const arr = getCourses(courses);
  createCardCourse(arr);
});

btnBook.addEventListener("click", () => {
  clearUI();
  changeBodyHeight();
  const arr = getBooks(books);
  createCardBook(arr);
});

btnGame.addEventListener("click", () => {
  clearUI();
  changeBodyHeight();
  const arr = getGames(games);
  createCardGame(arr);
});
