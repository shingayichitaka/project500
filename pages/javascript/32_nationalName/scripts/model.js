"use strict";

const getNationality = async (name) => {
  try {
    const response = await fetch(`https://api.nationalize.io?name=${name}`);
    const res = await response.json();
    const data = res.country;
    const arr = data.map((value) => {
      return {
        country: value.country_id,
        probability: value.probability,
      };
    });
    return arr;
  } catch (err) {
    console.log(err);
  }
};

getNationality("Michael");

export { getNationality };
