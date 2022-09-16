import { getAPIList } from "./apisList.js";

("use strict");

const app = document.querySelector(".app");
const arr = await getAPIList();

arr.forEach((value) => {
  const html = `
        <div class="block">
            <h2>${value.name}</h2>
            <p>${value.description}</p>
            <p><a href="${value.link}" target="_blank">Link</a></p>
        </div>
    `;
  app.insertAdjacentHTML("afterbegin", html);
});
