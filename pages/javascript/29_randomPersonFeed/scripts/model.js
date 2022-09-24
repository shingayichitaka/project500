"use strict";

const getImages = async () => {
  const response = await fetch(`https://randomuser.me/api/`);
  const response2 = await response.json();
  const data = response2.results[0].picture;
  const largeImg = data.large;
  return largeImg;
};

export { getImages };
