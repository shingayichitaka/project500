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

const updateUIWinner = function (
  winner,
  loser,
  winnerObj,
  loserObj,
  winnerBlock,
  loserBlock
) {
  winner.textContent = `🏆 ${winnerObj.name} wins! 🏆`;
  loser.textContent = `😭 ${loserObj.name} loses! 😭`;
  winnerBlock.classList.add("winner");
  winnerBlock.classList.remove("active");
  loserBlock.classList.remove("active");
};

const updateUIHold = function (
  playerObj,
  playerHighScore,
  playerCurrentScore,
  currentBlockPlayer,
  otherBlockPlayer
) {
  playerObj.holdHighScore = playerObj.getCurrentScore;
  playerHighScore.textContent = playerObj.getHighScore;
  playerObj.resetCurrentScore = 0;
  playerCurrentScore.textContent = playerObj.getCurrentScore;
  currentBlockPlayer.classList.remove("active");
  otherBlockPlayer.classList.add("active");
};

const updateUIRoll = function (
  randomNumber,
  playerObj,
  playerCurrentScore,
  currentBlockPlayer,
  otherPlayerBlock
) {
  if (randomNumber === 1) {
    playerObj.resetCurrentScore = 0;
    playerCurrentScore.textContent = playerObj.getCurrentScore;
    currentBlockPlayer.classList.remove("active");
    otherPlayerBlock.classList.add("active");
  } else {
    playerObj.addRollCurrentScore = randomNumber;
    playerCurrentScore.textContent = playerObj.getCurrentScore;
  }
};

roll.addEventListener("click", function () {
  let randomNumber = Math.trunc(Math.random() * 6 + 1);
  if (blockPlayer1.classList.contains("active") === true) {
    updateUIRoll(
      randomNumber,
      player1Obj,
      player1CurrentScore,
      blockPlayer1,
      blockPlayer2
    );
  } else if (blockPlayer2.classList.contains("active") === true) {
    updateUIRoll(
      randomNumber,
      player2Obj,
      player2CurrentScore,
      blockPlayer2,
      blockPlayer1
    );
  }
});

hold.addEventListener("click", function () {
  if (blockPlayer1.classList.contains("active") === true) {
    updateUIHold(
      player1Obj,
      player1HighScore,
      player1CurrentScore,
      blockPlayer1,
      blockPlayer2
    );
    if (player1Obj.getHighScore >= 100) {
      updateUIWinner(
        player1,
        player2,
        player1Obj,
        player2Obj,
        blockPlayer1,
        blockPlayer2
      );
    }
  } else if (blockPlayer2.classList.contains("active") === true) {
    updateUIHold(
      player2Obj,
      player2HighScore,
      player2CurrentScore,
      blockPlayer2,
      blockPlayer1
    );
    if (player2Obj.getHighScore >= 100) {
      updateUIWinner(
        player2,
        player1,
        player2Obj,
        player1Obj,
        blockPlayer2,
        blockPlayer1
      );
    }
  }
});

reset.addEventListener("click", function () {
  setUI();
});
