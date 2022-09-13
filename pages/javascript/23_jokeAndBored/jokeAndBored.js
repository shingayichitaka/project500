"use strict";

const app = document.querySelector(".app");
const btn = document.querySelector(".generate");

const generate = async function () {
  const data = await Promise.all([
    fetch("http://www.boredapi.com/api/activity/").then((resp) => resp.json()),
    fetch("https://official-joke-api.appspot.com/random_joke").then((resp) =>
      resp.json()
    ),
  ]);
  const [activityObject, jokeObject] = data;
  const { activity } = activityObject;
  const { setup, punchline } = jokeObject;
  const joke = `${setup} ${punchline}`;
  const html = `
    <div class="child">
        <p>Activity: 
        ${activity} </p>
        <p>Joke: 
        ${joke} </p>
    </div>
  `;
  app.insertAdjacentHTML("afterbegin", html);
};

const refreshUI = function () {
  const child = document.querySelector(".child");
  if (child === null) {
    generate();
  } else {
    child.remove();
    generate();
  }
};

btn.addEventListener("click", refreshUI);
