"use strict";

const getAge = async (name) => {
  try {
    const res = await fetch(`https://api.agify.io?name=${name}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { getAge };
