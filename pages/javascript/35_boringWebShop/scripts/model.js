import { randomNumber, generateRandomString, lowerCaseStr } from "./helper.js";

("use strict");

class Product {
  constructor(id, img, title, description, price, rating) {
    this.id = id;
    this.img = img;
    this.title = title;
    this.description = description;
    this.price = price;
    this.rating = rating;
  }
  get getImg() {
    return this.img;
  }
  get getTitle() {
    return this.title;
  }
  get getDescription() {
    return this.description;
  }
  get getPrice() {
    return this.price;
  }
  get getRating() {
    return this.rating;
  }
}

const getImgTitle = async (num) => {
  try {
    const randomNum = randomNumber(20);
    const res = await fetch(`https://api.imgflip.com/get_memes`);
    const {
      data: { memes },
    } = await res.json();
    const object = {
      img: memes[randomNum].url,
      title: memes[randomNum].name,
    };
    return object;
  } catch (err) {
    console.log(err);
  }
};

const generateProducts = async (num) => {
  try {
    const arr = [];
    let arrayLength = num;
    for (let i = 0; i < arrayLength; i++) {
      const id = i;
      const { img, title } = await getImgTitle();
      const rating = randomNumber(10);
      const price = randomNumber(2000);
      let description = "";
      for (let i = 0; i < 5 + randomNumber(10); i++) {
        description += generateRandomString(5);
      }
      const product = new Product(id, img, title, description, price, rating);
      arr.push(product);
    }
    return arr;
  } catch (err) {
    console.log(err);
  }
};

const searchProductsByName = (arr, string) => {
  try {
    const str = lowerCaseStr(string);
    const filteredArr = arr.filter((value) => {
      const productTitle = lowerCaseStr(value.getTitle);
      return productTitle.includes(str);
    });
    return filteredArr;
  } catch (err) {
    console.log(err);
  }
};

const determineTopProduct = (productList) => {
  try {
    const topProduct = productList.reduce((acc, value) => {
      if (acc.rating > value.rating) {
        return acc;
      } else {
        return value;
      }
    }, productList[0]);
    return topProduct;
  } catch (err) {
    console.log(err);
  }
};

export { generateProducts, searchProductsByName, determineTopProduct };
