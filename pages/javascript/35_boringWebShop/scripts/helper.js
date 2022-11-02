"use strict";

const randomNumber = (upperBound) => {
  try {
    const randomNum = Math.floor(Math.random() * upperBound);
    return randomNum;
  } catch (err) {
    console.log(err);
  }
};

const generateRandomString = (length) => {
  try {
    const characters = "abcdefghijklmnopqrstuvwxyz";
    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(randomNumber(charactersLength));
    }
    return result;
  } catch (err) {
    console.log(err);
  }
};

const lowerCaseStr = (str) => {
  return str.toLowerCase();
};

export { randomNumber, generateRandomString, lowerCaseStr };
