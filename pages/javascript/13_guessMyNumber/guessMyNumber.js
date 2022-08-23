"use strict";

const display = document.querySelector("#display");
const guess = document.querySelector("#guess");
const check = document.querySelector(".check");
const reset = document.querySelector(".reset");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highScore");

let randomNumber;
let scoreValue;
let highScoreValue;

const resetGame = function () {
  scoreValue = 20;
  highScoreValue = 0;
  display.textContent = "";
  guess.value = "";
  score.textContent = scoreValue;
  highScore.textContent = highScoreValue;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
};

resetGame();

const checkValue = function (guessValue) {
  if (guessValue > randomNumber) {
    display.textContent = "Too High 📈";
    scoreValue--;
    score.textContent = scoreValue;
  } else if (guessValue < randomNumber) {
    display.textContent = "Too Low 📉";
    scoreValue--;
    score.textContent = scoreValue;
  } else if (guessValue === randomNumber) {
    randomNumber = Math.trunc(Math.random() * 20 + 1);
    highScoreValue++;
    highScore.textContent = highScoreValue;
    display.textContent = "";
  }
};

check.addEventListener("click", function () {
  if (scoreValue !== 0) {
    const guessValue = Number(guess.value);
    display.textContent = "";
    if (isNaN(guessValue) === true) {
      guess.value = "Please enter a valid number";
    } else {
      checkValue(guessValue);
    }
  } else {
    display.textContent = "Game Over 😭, please reset";
  }
});

reset.addEventListener("click", function () {
  resetGame();
});
