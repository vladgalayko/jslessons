"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Скільки фільмів ви подивились?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Скільки фільмів ви подивились?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один з останніх переглянутих фільмів', '').trim(),
                  b = +prompt('На скільки його оціните', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Переглянуто мало фільмів");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Ви класичний глядач");
        } else if (personalMovieDB.count >= 30) {
            console.log("Ви кіноман");
        } else {
            console.log("Помилка");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) { 
            console.log(personalMovieDB);
        }
    },
    toogleVisibleMyDb: function() {
        if (personalMovieDB.privat === false) {
            personalMovieDB.privat = true;
        } else {
            if (personalMovieDB.privat === true) {
                personalMovieDB.privat = false;
            }
        }
    },

    writeYourGanres: function() {
        for (let i = 1; i <= 3; i++) {
            let ganre = prompt(`Ваш улюблений жанр під номером ${i}`);
            if (ganre === '' || ganre === null) {
                i--;
            } else {
                personalMovieDB.genres[i - 1] = ganre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Улюблений жанр ${i + 1}, це ${item}`);
        });
    }   
};
