"use strict";

const getPokemon = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const res = await response.json();
    console.log(res);
    const data = {
      id: id,
      name: res.name,
      base: res.base_experience,
      height: res.height,
      moves: res.moves,
      weight: res.weight,
      type: res.types,
    };
    return data;
  } catch (err) {
    console.log(err);
  }
};

const randomNumber = () => {
  const num = Math.trunc(Math.random() * 150) + 1;
  console.log(num);
  return num;
};

export { getPokemon, randomNumber };
