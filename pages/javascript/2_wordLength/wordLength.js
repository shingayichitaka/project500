"use strict";

const board = document.querySelector(".board");
const calculate = document.querySelector(".calculate");
const word = document.querySelector("#word");
const answer = document.querySelector(".answer");

const message = function (element, message) {
  element.textContent = message;
};
message(board, "Please enter a valid word!");

calculate.addEventListener("click", function () {
  const submittedWord = word.value;
  if (String(submittedWord)) {
    message(answer, submittedWord.length);
    word.value = "";
    setTimeout(function () {
      answer.textContent = "";
    }, 2000);
  }
});
