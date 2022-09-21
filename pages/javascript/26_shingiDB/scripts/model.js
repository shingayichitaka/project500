("use strict");

const getCourses = (arr) => {
  const courses = [];
  arr.forEach((value) => {
    const course = {
      instructor: value.INSTRUCTOR,
      title: value.TITLE,
      skill: value.SKILL,
      rating: value.RATING,
      comment: value.COMMENT,
    };
    courses.push(course);
  });
  return courses;
};

const getBooks = (arr) => {
  const books = [];
  arr.forEach((value) => {
    const book = {
      author: value.AUTHOR,
      title: value.TITLE,
      genre: value.GENRE,
      rating: value.RATING,
      year: value.YEAR,
      comment: value.COMMENT,
    };
    books.push(book);
  });
  return books;
};

const getGames = (arr) => {
  const games = [];
  arr.forEach((value) => {
    const game = {
      developer: value.DEVELOPER,
      title: value.TITLE,
      publisher: value.PUBLISHER,
      genre: value.GENRE,
      rating: value.RATING,
      year: value.YEAR,
      comment: value.COMMENT,
    };
    games.push(game);
  });
  return games;
};

export { getCourses, getBooks, getGames };
