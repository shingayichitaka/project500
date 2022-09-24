import { getImages } from "./model.js";
import { createImg } from "./view.js";

("use strict");

const generate = async () => {
  for (let i = 0; i < 50; i++) {
    const img = await getImages();
    createImg(img);
  }
};

generate();
