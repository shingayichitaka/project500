"use strict";

const container = document.querySelector(".container");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");

const reviews = [];

class Person {
  constructor(name, profilePicture, stars, testimony) {
    this.name = name;
    this.profilePicture = profilePicture;
    this.stars = stars;
    this.testimony = testimony;
  }

  get getName() {
    return this.name;
  }
  get getProfilePicture() {
    return this.profilePicture;
  }
  get getStars() {
    return this.stars;
  }
  get getTestimony() {
    return this.testimony;
  }
}

const john = new Person(
  "John",
  "img/1.jpg",
  "⭐⭐⭐⭐⭐",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi pariatur assumenda laudantium eos molestiae non earum illum recusandae officia sit."
);

const cindy = new Person(
  "Cindy",
  "img/2.jpg",
  "⭐⭐⭐⭐",
  "Porttitor potenti. Cum. Luctus pulvinar commodo suscipit blandit elementum ad proin imperdiet. Ullamcorper. Nulla nullam inceptos integer porta."
);

const judith = new Person(
  "Judith",
  "img/3.jpg",
  "⭐",
  "Parturient. Orci porttitor venenatis, fringilla molestie elit. Habitasse nam sollicitudin venenatis amet luctus ultrices dapibus, lacus dui platea."
);

const anne = new Person(
  "Anne",
  "img/4.jpg",
  "⭐⭐",
  "Scelerisque viverra ligula cum inceptos facilisis. Sodales ad viverra Ligula rutrum dis. Vel et. Fusce. Dictum ultrices elementum fusce sem."
);

const rebecca = new Person(
  "Rebecca",
  "img/5.jpg",
  "⭐⭐⭐⭐⭐",
  "Lorem primis mi nullam bibendum bibendum, erat elementum ipsum tortor luctus aenean auctor pede Tincidunt eros convallis eu vehicula orci."
);

const amanda = new Person(
  "Amanda",
  "img/6.jpg",
  "⭐⭐⭐",
  "Mi etiam venenatis, inceptos nec rutrum consequat malesuada rhoncus tellus. Aliquam dictumst urna sodales facilisi neque magnis."
);

reviews.push(john, cindy, judith, anne, rebecca, amanda);

let pointer = 0;

const updateUI = function (pointer) {
  const html = `<section class="container-person">
    <img src="${reviews[pointer].getProfilePicture}" alt="picture of person">
            <h2>${reviews[pointer].getName}</h2>
        <h3>${reviews[pointer].getStars}</h3>
        <p>${reviews[pointer].getTestimony}</p>`;

  container.insertAdjacentHTML("afterbegin", html);
};

updateUI(pointer);

const removeElementUI = function () {
  const element = document.querySelector(".container-person");
  element.remove();
};

console.log(reviews[0]);

next.addEventListener("click", function () {
  if (pointer >= reviews.length - 1) {
    pointer = 0;
    removeElementUI();
    updateUI(pointer);
  } else {
    pointer++;
    removeElementUI();
    updateUI(pointer);
  }
});

previous.addEventListener("click", function () {
  if (pointer <= 0) {
    pointer = reviews.length - 1;
    removeElementUI();
    updateUI(pointer);
  } else {
    pointer--;
    removeElementUI();
    updateUI(pointer);
  }
});
