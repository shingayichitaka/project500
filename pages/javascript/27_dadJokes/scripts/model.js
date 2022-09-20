"use strict";

const getJoke = async () => {
  try {
    const res = await fetch(
      `https://official-joke-api.appspot.com/random_joke`
    );
    const data = await res.json();
    const joke = {
      setup: data.setup,
      punchline: data.punchline,
    };
    return joke;
  } catch (err) {
    console.log(err);
  }
};

export { getJoke };
