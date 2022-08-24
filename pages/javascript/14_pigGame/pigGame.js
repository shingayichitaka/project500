"use strict";

const blockPlayer1 = document.querySelector(".player1");
const blockPlayer2 = document.querySelector(".player2");
const player1 = document.querySelector(".player-name1");
const player1HighScore = document.querySelector(".player-highScore1");
const player1CurrentScore = document.querySelector(".player-currentScore1");
const player2 = document.querySelector(".player-name2");
const player2HighScore = document.querySelector(".player-highScore2");
const player2CurrentScore = document.querySelector(".player-currentScore2");
const roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");
const reset = document.querySelector(".reset");

class PlayerObject {
  constructor(name, highScore, currentScore) {
    this.name = name;
    this.highScore = highScore;
    this.currentScore = currentScore;
  }

  set addRollCurrentScore(rollValue) {
    this.currentScore += rollValue;
  }
  set holdHighScore(holdValue) {
    this.highScore += holdValue;
  }
  set resetHighScore(highScore) {
    this.highScore = highScore;
  }
  set resetCurrentScore(currentScore) {
    this.currentScore = currentScore;
  }

  get getHighScore() {
    return this.highScore;
  }
  get getCurrentScore() {
    return this.currentScore;
  }
}

const player1Obj = new PlayerObject("Player 1", 0, 0);
const player2Obj = new PlayerObject("Player 2", 0, 0);

const setUI = function () {
  blockPlayer1.classList.add("active");
  blockPlayer1.classList.remove("winner");
  blockPlayer2.classList.remove("active", "winner");
  player1Obj.resetCurrentScore = 0;
  player1Obj.resetHighScore = 0;
  player2Obj.resetCurrentScore = 0;
  player2Obj.resetHighScore = 0;
  player1HighScore.textContent = player1Obj.getHighScore;
  player1CurrentScore.textContent = player1Obj.getCurrentScore;
  player2HighScore.textContent = player2Obj.getHighScore;
  player2CurrentScore.textContent = player2Obj.getCurrentScore;
  player1.textContent = player1Obj.name;
  player2.textContent = player2Obj.name;
};

setUI();

roll.addEventListener("click", function () {
  let randomNumber = Math.trunc(Math.random() * 6 + 1);
  if (blockPlayer1.classList.contains("active") === true) {
    if (randomNumber === 1) {
      player1Obj.resetCurrentScore = 0;
      player1CurrentScore.textContent = player1Obj.getCurrentScore;
      blockPlayer1.classList.remove("active");
      blockPlayer2.classList.add("active");
    } else {
      player1Obj.addRollCurrentScore = randomNumber;
      player1CurrentScore.textContent = player1Obj.getCurrentScore;
    }
  } else if (blockPlayer2.classList.contains("active") === true) {
    if (randomNumber === 1) {
      player2Obj.resetCurrentScore = 0;
      player2CurrentScore.textContent = player2Obj.getCurrentScore;
      blockPlayer2.classList.remove("active");
      blockPlayer1.classList.add("active");
    } else {
      player2Obj.addRollCurrentScore = randomNumber;
      player2CurrentScore.textContent = player2Obj.getCurrentScore;
    }
  }
});

hold.addEventListener("click", function () {
  if (blockPlayer1.classList.contains("active") === true) {
    player1Obj.holdHighScore = player1Obj.getCurrentScore;
    player1HighScore.textContent = player1Obj.getHighScore;
    player1Obj.resetCurrentScore = 0;
    player1CurrentScore.textContent = player1Obj.getCurrentScore;
    blockPlayer1.classList.remove("active");
    blockPlayer2.classList.add("active");
    if (player1Obj.getHighScore >= 100) {
      player1.textContent = `🏆 ${player1Obj.name} wins! 🏆`;
      player2.textContent = `😭 ${player2Obj.name} loses! 😭`;
      blockPlayer1.classList.add("winner");
      blockPlayer1.classList.remove("active");
      blockPlayer2.classList.remove("active");
    }
  } else if (blockPlayer2.classList.contains("active") === true) {
    player2Obj.holdHighScore = player2Obj.getCurrentScore;
    player2HighScore.textContent = player2Obj.getHighScore;
    player2Obj.resetCurrentScore = 0;
    player2CurrentScore.textContent = player2Obj.getCurrentScore;
    blockPlayer2.classList.remove("active");
    blockPlayer1.classList.add("active");
    if (player2Obj.getHighScore >= 100) {
      player2.textContent = `🏆 ${player2Obj.name} wins! 🏆`;
      player1.textContent = `😭 ${player1Obj.name} loses! 😭`;
      blockPlayer2.classList.add("winner");
      blockPlayer2.classList.remove("active");
      blockPlayer1.classList.remove("active");
    }
  }
});

reset.addEventListener("click", function () {
  setUI();
});
