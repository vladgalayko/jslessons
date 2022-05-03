"use strict";

const numberOfFilms = +prompt('Скільки фільмів ви подивились?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один з останніх переглянутих фільмів', ''),
          b = +prompt('На скільки його оціните', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
    if (personalMovieDB.count < 10) {
        console.log("Переглянуто мало фільмів");
    }
    if (personalMovieDB.count > 10 <= 30) {
        console.log("Ви класичний глядач");
    } else if (personalMovieDB >= 50) {
        console.log("Ви кіноман");
    }
}

console.log(personalMovieDB);
