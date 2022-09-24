import { getPokemon } from "./model.js";

("use strict");

const createCard = async (object) => {
  const pokemon = object;
  const arr = pokemon.type.map((value) => {
    return value.type.name;
  });
  const pokeName = pokemon.name.toUpperCase();
  const html = `
    <div class="card">
        <h2>Name: ${pokeName}</h2>
        <p>Base Experience: ${pokemon.base}</p>
        <p>Height: ${pokemon.height}</p>
        <p>Weight: ${pokemon.weight}</p>
        <p>Number of Moves: ${pokemon.moves.length}</p>
        <p>Type(s): ${arr.join(" ")}</p>
    </div>
  `;
  const main = document.querySelector("main");
  main.insertAdjacentHTML("afterbegin", html);
};

export { createCard };
