"use strict";

const getShows = async (show) => {
  try {
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${show}`
    );
    const data = await response.json();
    const showObject = data.map((value) => {
      return {
        name: value.show.name,
        link: value.show.url,
        img: value.show.image.medium,
        summary: value.summary,
      };
    });
    return showObject;
  } catch (err) {
    console.log(err);
  }
};

export { getShows };
