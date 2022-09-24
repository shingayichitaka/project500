import { createCard } from "./view.js";
import { getPokemon, randomNumber } from "./model.js";

("use strict");

const renderDeck = async () => {
  for (let i = 0; i < 25; i++) {
    const num = randomNumber();
    const pokemon = await getPokemon(num);
    createCard(pokemon);
  }
};

renderDeck();
