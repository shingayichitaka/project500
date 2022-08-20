"use strict";

const display = document.querySelector("#display");
const message = document.querySelector("#message");
const send = document.querySelector(".send");

const deliver = function (element1, element2) {
  element1.textContent = "The message has been delivered";
  element2.value = "";
  setTimeout(() => {
    element1.textContent = "";
  }, 2500);
};

send.addEventListener("click", function () {
  const messageValue = String(message);
  deliver(display, message);
});
