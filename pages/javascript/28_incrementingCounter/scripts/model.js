"use strict";

const counter = (platform, counterLimit) => {
  const limit = counterLimit;
  let display;
  if (platform === "twitter") {
    display = document.querySelector(".twitter");
  } else if (platform === "facebook") {
    display = document.querySelector(".facebook");
  } else if (platform === "youtube") {
    display = document.querySelector(".youtube");
  }
  for (let i = 0; i <= limit; i++) {
    setTimeout(() => {
      display.textContent = i;
    }, 1000);
  }
};

export { counter };
