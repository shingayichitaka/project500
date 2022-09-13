"use strict";

const btn = document.querySelector(".generate");
const app = document.querySelector(".app");

class User {
  constructor(name, age, gender, img) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.img = img;
  }

  get getName() {
    return this.name;
  }
  get getAge() {
    return this.age;
  }
  get getGender() {
    return this.gender;
  }
  get getImg() {
    return this.img;
  }
}

const generateUser = async function () {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const respResult = await response.json();
    const data = respResult.results;
    const user = await new User(
      `${data[0].name.title} ${data[0].name.first} ${data[0].name.last}`,
      data[0].dob.age,
      data[0].gender,
      data[0].picture.large
    );
    console.log(user);
    const html = `
    <div class="child">
    <img src="${user.getImg}">
        <h2>${user.getName}</h2>
        <h2>${user.getAge}</h2>
        <h2>${user.getGender}</h2>
    </div>
    `;
    app.insertAdjacentHTML("afterbegin", html);
  } catch (err) {
    console.log(err);
  }
};

const removeChild = function () {
  const child = document.querySelector(".child");
  child.remove();
};

btn.addEventListener("click", () => {
  const child = document.querySelector(".child");
  if (child === null) {
    generateUser();
  } else {
    removeChild();
    generateUser();
  }
});
