"use strict";

const container = document.querySelector(".container");
const click = document.querySelector(".click");

class Person {
  constructor(name, img) {
    this.name = name;
    this.img = img;
  }

  get getName() {
    return this.name;
  }
  get getImg() {
    return this.img;
  }
}

class Billionaire extends Person {
  constructor(name, img, netWorth, quote, bio) {
    super(name, img);
    this.netWorth = netWorth;
    this.quote = quote;
    this.bio = bio;
  }

  get getNetWorth() {
    return this.netWorth;
  }
  get getQuote() {
    return this.quote;
  }
  get getBio() {
    return this.bio;
  }
}

const billionaire1 = new Billionaire(
  "Jeff Bezos",
  "img/bezos.jpg",
  177,
  "I didn't think I'd regret trying and failing. And I suspected I would always be haunted by a decision to not try at all.",
  "Jeff Bezos founded e-commerce giant Amazon in 1994 out of his garage in Seattle. He stepped down as CEO to become executive chairman on July 5, 2021."
);
const billionaire2 = new Billionaire(
  "Elon Musk",
  "img/musk.jpg",
  151,
  "I operate on the physics approach to analysis. You boil things down to the first principles or fundamental truths in a particular area and then you reason up from there.",
  "Elon Musk is working to revolutionize transportation both on Earth, through electric car maker Tesla -- and in space, via rocket producer SpaceX."
);
const billionaire3 = new Billionaire(
  "Bill Gates",
  "img/gates.jpg",
  124,
  "Money has no utility to me beyond a certain point. Its utility is entirely in building an organization and getting the resources out to the poorest in the world.",
  "Bill Gates and Melinda French Gates, now divorcing, chair the Bill & Melinda Gates Foundation, the world's largest private charitable foundation."
);
const billionaire4 = new Billionaire(
  "Mark Zuckerberg",
  "img/zuc.jpg",
  97,
  "We may not have the power to create the world we want immediately, but we can all start working on the long term today.",
  "Facebook, the social network Zuckerberg runs, has been an information hub during the pandemic, but has come under scrutiny for spreading vaccine misinformation."
);
const billionaire5 = new Billionaire(
  "Warren Buffet",
  "img/buffet.jpg",
  96,
  "Rational people don't risk what they have and need for what they don't have and don't need.",
  "Known as the 'Oracle of Omaha,' Warren Buffett is one of the most successful investors of all time."
);
const billionaire6 = new Billionaire(
  "Larry Ellison",
  "img/ellison.jpg",
  93,
  "When people start telling you that you're crazy, you just might be on to the most important innovation in your life.",
  "Larry Ellison is chairman, chief technology officer and cofounder of software giant Oracle, of which he owns about 35%."
);
const billionaire7 = new Billionaire(
  "Larry Page",
  "img/page.jpg",
  91.5,
  "You never lose a dream; it just incubates as a hobby.",
  "Larry Page stepped down as CEO of Alphabet, the parent of Google, in December 2019 but remains a board member and a controlling shareholder."
);
const billionaire8 = new Billionaire(
  "Sergey Brin",
  "img/brin.jpg",
  89,
  "Obviously everyone wants to be successful, but I want to be looked back on as being very innovative, very trusted and ethical and ultimately making a big difference in the world.",
  "Sergey Brin stepped down as president of Alphabet, parent company of Google, in December 2019 but remains a controller shareholder and a board member."
);
const billionaire9 = new Billionaire(
  "Mukesh Ambani",
  "img/ambani.jpg",
  84.5,
  "Anything and everything that can go digital is going digital. India cannot afford to be left behind.",
  "Mukesh Ambani chairs and runs $74 billion (revenue) Reliance Industries, which has interests in petrochemicals, oil and gas, telecom and retail."
);

const richPeople = [];

richPeople.push(
  billionaire1,
  billionaire2,
  billionaire3,
  billionaire4,
  billionaire5,
  billionaire6,
  billionaire7,
  billionaire8,
  billionaire9
);

console.log(richPeople);

let pointer = 0;

const updateUI = function (pointer) {
  const html = `<div class="child">
          <h2>${richPeople[pointer].getName}</h2>
          <img src="${richPeople[pointer].getImg}">
          <h3>$${richPeople[pointer].getNetWorth} Billion</h3>
          <p>${richPeople[pointer].getQuote}</p>
          <p>${richPeople[pointer].getBio}</p>
        </div>`;

  container.insertAdjacentHTML("afterbegin", html);
};

const clearUI = () => {
  const child = document.querySelector(".child");
  child.remove();
};

updateUI(pointer);

click.addEventListener("click", function () {
  pointer++;
  if (pointer === richPeople.length) {
    pointer = 0;
    clearUI();
    updateUI(pointer);
  } else {
    clearUI();
    updateUI(pointer);
  }
});
