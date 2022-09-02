"use strict";

const container = document.querySelector(".container");
const click = document.querySelector(".click");

class Quote {
  constructor(author, quote) {
    this.author = author;
    this.quote = quote;
  }

  get getAuthor() {
    return this.author;
  }
  get getQuote() {
    return this.quote;
  }
}

const quote1 = new Quote(
  "Bernard M. Baruch",
  "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
);
const quote2 = new Quote(
  "Marcus Tullius Cicero",
  "A room without books is like a body without a soul."
);
const quote3 = new Quote("Frank Zappa", "So many books, so little time.");
const quote4 = new Quote(
  "Albert Einstein",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
);
const quote5 = new Quote(
  "Marilyn Monroe",
  "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
);
const quote6 = new Quote(
  "Oscar Wilde",
  "Be yourself; everyone else is already taken."
);

const quotesCollection = [];

quotesCollection.push(quote1, quote2, quote3, quote4, quote5, quote6);

console.log(quotesCollection);

let pointer = 0;

const updateUI = function (pointer) {
  const html = `<div class="child">
          <h2>${quotesCollection[pointer].getAuthor}</h2>
          <p>${quotesCollection[pointer].getQuote}</p>
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
  if (pointer === quotesCollection.length) {
    pointer = 0;
    clearUI();
    updateUI(pointer);
  } else {
    clearUI();
    updateUI(pointer);
  }
});
